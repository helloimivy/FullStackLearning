// 1. private members using WeakMaps
// 2. extending prototype using extend and super keywords
const _radius = new WeakMap();

class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log("draw");
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("The radius is not valid");
    _radius.set(this, value);
  }
  // Method overriding
  draw() {
    // would allow you to spit out both the super move method as well as circle specific
    super.draw();
    console.log("circle draw");
  }
}

let s = new Circle(1, "red");
console.log(s.radius);
s.radius = 10;
console.log(s.radius);
console.log(s.draw());
