import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import * as d3 from "d3"

// This magic line removed the error messages for numeric
declare var lobos: any;

@autoinject
export class SpatialMigration {
  params = [];
  time_range = [];

  rnd;
  sampling;

  p = 0.5;
  max_mating_distance = 1;
  simulation_counter = 0;

  constructor(private mating_distance_range, private grid_length) {
    this.sampling = new Sampling("sobol");
    this.rnd = d3.randomUniform();
  }

  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init_simulation(grid) {
    grid.length = 0;
    this.simulation_counter = 0;

    for(let i = 0; i < this.grid_length; i++) {
      let temp = []

      for (var j = 0; j < this.grid_length; j++) {
        let random_number = Math.random();

        if (random_number < this.p*this.p) {
            temp[j] = "A1A1";
        }
        else if (random_number > 1 - (1-this.p) * (1-this.p)) {
            temp[j] = "A2A2";
        }
        else {
            temp[j] = "A1A2";
        }
      }

      grid.push(temp)
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

  run_simulation(grid) {
    let temp_grid = [];

    for(let i = 0; i < this.grid_length; i++) {
      temp_grid[i] = [];

      for(let j = 0; j < this.grid_length; j++) {
        // Select mating partner
        let mating_partner = this.pick_mating_partner(grid,i, j);

        // Return offspring genotype
        temp_grid[i][j] = this.get_offspring(grid[i][j], mating_partner);
      }
    }

    grid.length = 0;

    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = temp_grid[i][j]
      }
      grid.push(temp)
    }

    this.time_range.push(this.simulation_counter++)
  }
}
