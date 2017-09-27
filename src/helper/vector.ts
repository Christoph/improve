export class Vector {
  constructor(private x, private y) {
  }

  distance(vector: Vector) {
    return Math.round(Math.sqrt((this.x - vector.x)**2+(this.y - vector.y)**2));
  }

  length() {
    return Math.sqrt(this.x**2+this.y**2);
  }

  unit() {
    let length = this.length();
    return new Vector(this.x/length, this.y/length);
  }
}
