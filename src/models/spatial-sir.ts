import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import * as d3 from "d3"
import * as _ from "lodash"

// This magic line removed the error messages for numeric
declare var lobos: any;

@autoinject
export class SpatialSir {
  params = [];
  time_range = [];

  p = 0.5;
  beta = 0.1;
  simulation_counter = 0;

  constructor(private max_mating_distance, private grid_length) {
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
        temp[j] = "S";
      }

      grid.push(temp)
    }

    grid[this.get_random_int(0,this.grid_length-1)][this.get_random_int(0,this.grid_length-1)] = "I";
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

  expose_neighbours(grid, temp_grid, i, j) {
    for(let n_i = i - 1;n_i <= i + 1; n_i++) {
      for(let n_j = j - 1;n_j <= j + 1; n_j++) {
        if(n_i == i && n_j == j) {
          continue;
        }
        this.infection(grid, temp_grid, this.get_bounded_index(n_i), this.get_bounded_index(n_j));
      }
    }
  }

  infection(grid, temp_grid, i, j) {
    if(grid[i][j] == "S") {
      if(Math.random() < this.beta) {
        temp_grid[i][j] = "I";
      }
    }
  }

  run_simulation(grid, data_lines) {
    // Duplicate to temp_grid
    let temp_grid = _.cloneDeep(grid);

    // Simulation
    for(let i = 0; i < this.grid_length; i++) {
      for(let j = 0; j < this.grid_length; j++) {
        // Infect surrounding hosts
        if(grid[i][j] == "I") {
          this.expose_neighbours(grid,temp_grid,i, j);
        }
      }
    }

    // Update grid with values from temp_grid
    grid.length = 0;
    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = temp_grid[i][j]
      }
      grid.push(temp)
    }

    // data_lines.push({x: this.simulation_counter++, F: this.compute_FScore(grid)})
  }
}
