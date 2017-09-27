import {Vector} from "../helper/vector"

export class Sheep {
  // Attributes
  public type = "sheep";
  private herding_range = 1;
  private flocking_factor = 3;

  private neighbors = new Map();
  private action = "nothing";
  private direction;

  constructor(private position: Vector) {
    // Initialize with random direction
    this.direction = new Vector(this.get_random_float(-1, 1), this.get_random_float(-1, 1)).unit()
  }

  // Generate random numbers within range
  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get_random_float(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  // Basic decision function
  public simulate(grid, host_list) {
    this.look(host_list);
    this.decide();
  }

  look(host_list) {
    this.neighbors.clear();

    for(let host of host_list) {
      if(host !== this) {
        let distance = this.position.distance(host.position);
        if(distance <= this.herding_range) {
          this.neighbors.set(host, distance);
        }
      }
    }
  }

  decide() {
    let sheeps_around = 0;
    let predators_around = false;

    // Analyse surroundings
    this.neighbors.forEach((value, key) => {
      if(key.type == "sheep" && value <= this.herding_range) {
        sheeps_around++;
      }
      if(key.type == "wolf" && value <= this.herding_range) {
        predators_around = true;
      }
    })

    // decide based on importance
    if(predators_around) {
      this.action = "flee";
    }
    else {
      this.flocking_movement(sheeps_around);
    }
  }

  flocking_movement(sheeps_around) {

  }
}

export class Wolf {
  constructor(private x, private y) {
  }
}
