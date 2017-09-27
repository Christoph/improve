import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import {Wolf, Sheep} from "../hosts/hosts"
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
  host_list = [];

  // Global params
  max_mating_distance = 1;
  simulation_iterations = 0;

  constructor(private grid) {
      this.noise = new Noise()
  }

  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init_simulation() {
    // Reset simulation variables
    this.grid.length = 0;
    this.simulation_iterations = 0;

    // Create noisemap for the landscape
    let noise_map = [];
    this.noise.seed(Math.random());

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
      }
      this.landscape_grid.push(temp_landscape)
    }

    // Add initial hosts
    let found = false;
    // Find grass area
    while(!found) {
      let x = this.get_random_int(0,this.grid_length-1);
      let y = this.get_random_int(0,this.grid_length-1)
      if(this.landscape_grid[x][y] == "grass_fresh") {
        found = true;

        this.host_list.push(new Sheep([x, y]));
        this.host_list.push(new Sheep([x-1, y]));
        this.host_list.push(new Sheep([x+1, y]));
        this.host_list.push(new Sheep([x, y-1]));
        this.host_list.push(new Sheep([x, y+1]));
        this.host_list.push(new Sheep([x+1, y+1]));
      }
    }

    // Add initial data to grid
    for(let i = 0; i < this.grid_length; i++) {
      this.grid.push(_.clone(this.landscape_grid[i]))
    }

    // Add hosts
    for (var host of this.host_list) {
      this.grid[host.position[0]][host.position[1]] = host.type;
    }
  }

  update_grid() {
    this.landscape_grid.length = 0;
    this.grid.length = 0;

    for(let i = 0; i < this.grid_length; i++) {
      // Copy temp to working grids
      this.landscape_grid.push(_.clone(this.temp_landscape_grid[i]))

      // Add landscape changes
      this.grid.push(_.clone(this.landscape_grid[i]))

      // Add host changes
      for (var host of this.host_list) {
        this.grid[host.position[0]][host.position[0]] = host.type;
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

   get_target_location(x, y) {
     let nx = 0;
     let ny = 0;

     // 1: up, 2: right, 3: down, 4: left
     let direction = this.get_random_int(1, 4);

     if(direction == 1) {
       nx = x;
       ny = y + 1;
     }
     if(direction == 2) {
       nx = x + 1;
       ny = y;
     }
     if(direction == 3) {
       nx = x;
       ny = y - 1;
     }
     if(direction == 4) {
       nx = x - 1;
       ny = y;
     }

     return [nx, ny];
   }

  //  get_neighors(range, x, y) {
  //    let count = [];
  //    for(let nx = x - range;nx <= x + range; nx++) {
  //      for(let ny = y - range;ny <= y + range; ny++) {
  //        if(this.host_grid[nx][ny] != "empty") count++;
  //      }
  //    }
  //    return count;
  //  }
   //
  //  get_centroid_direction(range, x, y) {
  //    let count = 0;
  //    for(let nx = x - range;nx <= x + range; nx++) {
  //      for(let ny = y - range;ny <= y + range; ny++) {
  //        if(this.host_grid[nx][ny] != "empty") count++;
  //      }
  //    }
  //    return count;
  //  }
   //
  //  get_free_space(movement, x, y) {
  //    let spaces = [];
  //    for(let nx = x - movement;nx <= x + movement; nx++) {
  //      for(let ny = y - movement;ny <= y + movement; ny++) {
  //        if(this.host_grid[nx][ny] == "empty" && this.temp_host_grid[nx][ny] == "empty") spaces.push([nx, ny]);
  //      }
  //    }
   //
  //    return spaces[this.get_random_int(0, spaces.length-1)];
  //  }
   //
  //  flocking_movement(x, y) {
  //    let nx = 0;
  //    let ny = 0;
   //
  //    //Separation
  //    if(this.count_neighors(1,x,y) >= 3) {
  //      this.move_host([x, y], this.get_free_space(1, x, y));
  //    } // Cohesion
  //    else {
  //      direction = this.get_random_int(1, 4);
  //    }
//
     // 1: up, 2: right, 3: down, 4: left
    //  if(direction == 1) {
    //    nx = x;
    //    ny = y + 1;
    //  }
    //  if(direction == 2) {
    //    nx = x + 1;
    //    ny = y;
    //  }
    //  if(direction == 3) {
    //    nx = x;
    //    ny = y - 1;
    //  }
    //  if(direction == 4) {
    //    nx = x - 1;
    //    ny = y;
    //  }
  //  }

  //  move_host(from, to) {
  //    this.temp_host_grid[to[0]][to[1]] = this.host_grid[from[0]][from[1]];
  //    this.temp_host_grid[from[0]][from[1]] = "empty";
  //  }

   simulate_sheeps(x, y) {
     // Movement
    //  let location = this.get_target_location(x, y);
    //  let location = this.flocking_movement(x, y);

    //  if(this.host_grid[location[0]][location[1]] == "empty" && this.temp_host_grid[location[0]][location[1]] == "empty") {
    //    this.move_host([x, y], location);
    //  }
   }

  run_iteration() {
    // Create temporary grid for this iteration
    this.temp_landscape_grid = _.cloneDeep(this.landscape_grid);

    // Go through all points
    for(let x = 0; x < this.grid_length; x++) {
      for(let y = 0; y < this.grid_length; y++) {
        // if(this.host_grid[x][y] == "sheep") {
        //   this.simulate_sheeps(x, y);
        // }
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
