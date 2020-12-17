class Circle {
  constructor(radius) {
    this.radius = radius;
    this.area = function () {
      return Math.PI * radius * radius;
    };
  }
}

let circle1 = new Circle(1);
let circle2 = new Circle(2);
let circle3 = new Circle(3);
//console.log(circle1, circle2, circle3);

//console.log(circle3.area);

console.log(circle2.area());
