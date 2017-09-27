import {Vector} from "../helper/vector"

export class Sheep {
  // Attributes
  public type = "sheep";
  private vision = 7;
  private herding_range = 4;
  private desired_separation = 3;
  private max_speed = 2;

  private neighbors = new Map();
  private velocity;
  private next_position;

  constructor(private position: Vector) {
    this.next_position = new Vector(position.x, position.y)
    // Initialize with random direction
    this.velocity = new Vector(this.get_random_float(-1, 1), this.get_random_float(-1, 1)).unit()
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
    this.decide(grid);
  }

  look(host_list) {
    this.neighbors.clear();

    for(let host of host_list) {
      if(host !== this) {
        let distance = this.position.distance(host.position);

        if(distance <= this.vision ) {
          this.neighbors.set(host, distance);
        }
      }
    }
  }

  decide(grid) {
    let sheeps_around = [];
    let predators_around = [];

    // Analyse surroundings
    this.neighbors.forEach((value, key) => {
      if(key.type == "sheep" && value <= this.herding_range) {
        sheeps_around.push(key);
      }
      if(key.type == "wolf" && value <= this.herding_range) {
        predators_around.push(key)
      }
    })

    // decide based on importance
    if(predators_around.length > 0) {
    }
    else {
      this.movement(grid, sheeps_around);
    }
  }

  movement(grid, neighbors) {
    let acceleration = this.flock(neighbors)

    this.velocity.add(acceleration).limit(this.max_speed)
    this.next_position.add(this.velocity)

    // Prepare for discrete grid
    this.next_position.discretize().wrap(grid.length)
  }

  flock(neighbors) {
    let separation: Vector = this.separate(neighbors)
    let alignment: Vector = this.align(neighbors)
    let cohesion: Vector = this.cohere(neighbors)

    return separation.add(alignment).add(cohesion)
  }

  cohere(neighbors) {
    let sum = new Vector(0, 0);

    neighbors.forEach(n => {
      sum.add(n.position)
    })

    return this.move_to(sum.divide(neighbors.length))
  }

  align(neighbors) {
    let mean = new Vector(0, 0)

    neighbors.forEach(n => {
      mean.add(n.velocity)
    })

    if(mean.length() > 0) {
      mean.divide(neighbors.length)
      mean.limit(5)
    }

    return mean
  }

  separate(neighbors) {
    let mean = new Vector(0, 0)
    let counter = 0;

    neighbors.forEach(n => {
      let distance = n.position.distance(this.position)

      if(distance > 0  && distance < this.desired_separation) {
        // Somethimes move further
        // if(Math.random() < 0.1) {
        //   mean.add(n.position.subtract(this.position).unit().divide(distance))
        // }
        // else {
          mean.add(this.position.clone().subtract(n.position).unit())

        // }
        counter++;
      }
      if(distance == 0) {
        console.log("Distance < desired")
        mean.add(this.position.clone().add(n.position).unit())
        counter++;
      }
    })

    if(mean.length() > 0) {
      mean.divide(counter)
    }

    return mean
  }

  move_to(target : Vector) {
    target.subtract(this.position);
    let distance = target.length();

    if(distance > 0) {
      return target.unit().subtract(this.velocity)
    }
    else {
      return new Vector(0, 0)
    }
  }
}

export class Wolf {
  constructor(private x, private y) {
  }
}
