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
  host_grid = [];

  // Global params
  max_mating_distance;

  params = [];
  time_range = [];

  p = 0.8;
  simulation_counter = 0;

  constructor(private grid) {
      this.noise = new Noise(Math.random())
  }

  set_params(mating_selected) {
    this.max_mating_distance = mating_selected;
  }

  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init_simulation() {
    this.grid.length = 0;
    this.simulation_counter = 0;
    let noise_map = []
    this.noise.seed(Math.random());

    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = this.noise.simplex2(i/50, j/50)
      }
      noise_map.push(temp)
    }

    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        let value = "grass"
        if(noise_map[i][j] <= 0) {
          value = "grass";
        }
        else {
          value = "dirt"
        }
        temp[j] = value;
      }
      this.landscape_grid.push(temp)
    }

    this.update_grid();
  }

  update_grid() {
    this.grid.length = 0;

    for(let i = 0; i < this.grid_length; i++) {
      this.grid.push(_.clone(this.landscape_grid[i]))
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

   compute_FScore(grid) {
     let A1A1 = 0;
     let A1A2 = 0;
     let A2A2 = 0;
     for (var i = 0; i < this.grid_length; i = i + 1) {
         for (var ii = 0; ii < this.grid_length; ii = ii + 1) {
             if (grid[i][ii] == "A1A1") {
                 A1A1 = A1A1 + 1;
             }
             else if (grid[i][ii] == "A1A2") {
                 A1A2 = A1A2 + 1;
             }
             else {
                 A2A2 = A2A2 + 1;
             }
         }
     }

     let N = A1A1 + A1A2 + A2A2;
     let h_o = A1A2 / N;
     let p = ((2 * A1A1) + A1A2) / (2 * N);
     let h_e = 2 * p * (1-p);
     let F = (h_e - h_o) / h_e;


     return F;
  }

  run_simulation(data_lines) {
    let temp_grid = [];

    for(let i = 0; i < this.grid_length; i++) {
      temp_grid[i] = [];

      for(let j = 0; j < this.grid_length; j++) {
        // Select mating partner
        let mating_partner = this.pick_mating_partner(this.grid,i, j);

        // Return offspring genotype
        temp_grid[i][j] = this.get_offspring(this.grid[i][j], mating_partner);
      }
    }

    this.grid.length = 0;

    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = temp_grid[i][j]
      }
      this.grid.push(temp)
    }

    data_lines.push({x: this.simulation_counter++, F: this.compute_FScore(this.grid)})
  }
}
