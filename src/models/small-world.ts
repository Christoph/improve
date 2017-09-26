import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import * as d3 from "d3"
import * as _ from "lodash"

// This magic line removed the error messages for numeric
declare var lobos: any;
declare var Noise: any;

@autoinject
export class SmallWorld {
  // Grid params
  noise;
  grid_length = 100;
  landscape_grid = [];
  temp_landscape_grid = [];
  host_grid = [];
  temp_host_grid = [];

  // Global params
  max_mating_distance;

  params = [];
  time_range = [];

  p = 0.8;
  simulation_iterations = 0;

  constructor(private grid) {
      this.noise = new Noise()
  }

  set_params(mating_selected) {
    this.max_mating_distance = mating_selected;
  }

  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init_simulation() {
    this.grid.length = 0;
    this.simulation_iterations = 0;
    let noise_map = [];
    this.noise.seed(Math.random());

    // Create noisemap for the landscape
    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = this.noise.simplex2(i/50, j/50)
      }
      noise_map.push(temp)
    }

    // Initilize landscape and host grids
    for(let i = 0; i < this.grid_length; i++) {
      let temp_landscape = []
      let temp_host = []

      for(let j = 0; j < this.grid_length; j++) {
        // Landscape
        let value = "grass"
        if(noise_map[i][j] <= 0) {
          value = "grass_fresh";
        }
        else {
          value = "dirt"
        }
        temp_landscape[j] = value;

        // Hosts
        temp_host[j] = "empty"
      }
      this.landscape_grid.push(temp_landscape)
      this.host_grid.push(temp_host)
    }

    // Add initial sheep
    let found = false;
    while(!found) {
      let x = this.get_random_int(0,this.grid_length-1);
      let y = this.get_random_int(0,this.grid_length-1)
      if(this.landscape_grid[x][y] == "grass_fresh") {
        found = true;

        this.host_grid[x][y] = "sheep"
        this.host_grid[x-1][y] = "sheep"
        this.host_grid[x+1][y] = "sheep"
        this.host_grid[x][y-1] = "sheep"
        this.host_grid[x][y+1] = "sheep"
        this.host_grid[x+1][y+1] = "sheep"
      }
    }

    // Add initial data to grid
    for(let i = 0; i < this.grid_length; i++) {
      this.grid.push(_.clone(this.landscape_grid[i]))

      // Add hosts
      for(let j = 0; j < this.grid_length; j++) {
        if(this.host_grid[i][j] != "empty") {
          this.grid[i][j] = this.host_grid[i][j];
        }
      }
    }
  }

  update_grid() {
    this.landscape_grid.length = 0;
    this.host_grid.length = 0;
    this.grid.length = 0;

    for(let i = 0; i < this.grid_length; i++) {
      // Copy temp to working grids
      this.landscape_grid.push(_.clone(this.temp_landscape_grid[i]))
      this.host_grid.push(_.clone(this.temp_host_grid[i]))

      // Add landscape changes
      this.grid.push(_.clone(this.landscape_grid[i]))

      // Add host changes
      for(let j = 0; j < this.grid_length; j++) {
        if(this.host_grid[i][j] != "empty") {
          this.grid[i][j] = this.host_grid[i][j];
        }
      }
    }
  }

  get_bounded_index(index) {
    let bounded_index = index;

    if(index < 0) {
      bounded_index = index + this.grid_length;
    }
    if(index >= this.grid_length) {
      bounded_index = index - this.grid_length;
    }

    return bounded_index
  }

  pick_mating_partner(grid, i, j) {
    let mating_i = this.get_random_int(i - this.max_mating_distance, i + this.max_mating_distance);
    let mating_j = this.get_random_int(j - this.max_mating_distance, j + this.max_mating_distance);

    mating_i = this.get_bounded_index(mating_i);
    mating_j = this.get_bounded_index(mating_j);

    return grid[mating_i][mating_j]
  }

  get_offspring(parent1, parent2) {
      var p1 = parent1;
      var p2 = parent2;
      if (p1 == "A1A1" && p2 == "A1A1") {
          return "A1A1";
      }
      else if ((p1 == "A1A1" && p2 == "A1A2") || (p1 == "A1A2" && p2 == "A1A1")) {
          if (Math.random() < 0.5) {
              return "A1A1";
          }
          else {
              return "A1A2";
          }
      }
      else if ((p1 == "A1A1" && p2 == "A2A2") || (p1 == "A2A2" && p2 == "A1A1")) {
          return "A1A2";
      }
      else if (p1 == "A1A2" && p2 == "A1A2") {
          var random_number = Math.random();
          if (random_number < 0.25) {
              return "A1A1";
          }
          else if (random_number > 0.75){
              return "A2A2";
          }
          else {
              return "A1A2";
          }
      }
      else if ((p1 == "A1A2" && p2 == "A2A2") || (p1 == "A2A2" && p2 == "A1A2")) {
          if (Math.random() < 0.5) {
              return "A1A2";
          }
          else {
              return "A2A2";
          }
      }
      else if (p1 == "A2A2" && p2 == "A2A2") {
          return "A2A2";
      }
   }

   simulate_sheeps() {

   }

  run_iteration() {
    // Create temporary grid for this iteration
    this.temp_host_grid = _.cloneDeep(this.host_grid);
    this.temp_landscape_grid = _.cloneDeep(this.landscape_grid);

    // Go through all points
    for(let x = 0; x < this.grid_length; x++) {
      for(let y = 0; y < this.grid_length; y++) {
        if(this.landscape_grid[x][y] == "sheep") {
          this.simulate_sheeps();
        }
        // // Select mating partner
        // let mating_partner = this.pick_mating_partner(this.grid,i, j);
        //
        // // Return offspring genotype
        // temp_grid[i][j] = this.get_offspring(this.grid[i][j], mating_partner);
      }
    }

    // Update grid
    this.update_grid();

    // Increase simulation counter
    this.simulation_iterations++;
  }
}
