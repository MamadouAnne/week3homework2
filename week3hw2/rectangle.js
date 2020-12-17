//Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
//Write a function called rectangle_area that returns the area of the given object.
//Write a function total_sides that returns the number of sides of the object.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.rectangle_area = function () {
      //function expression
      return width * height;
    };
  }
  total_sides() {
    // function declaration
    return `4 sides`;
  }
}

let rectangle1 = new Rectangle(24, 10);
let rectangle2 = new Rectangle(34, 12);
let rectangle3 = new Rectangle(18, 7);

console.log(rectangle1.rectangle_area());
console.log(rectangle2.total_sides());
