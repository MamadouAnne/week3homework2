//Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//Write a function called square_area that returns the area of the given object.
//Write a function total_sides that returns the number of sides of the object.

class Square {
  constructor(side) {
    this.side = side;
    this.square_area = function () {
      //function expression
      return side * side;
    };
  }
  total_sides() {
    // function declaration
    return `4 sides`;
  }
}

let square1 = new Square(29);
let square2 = new Square(34);
let square3 = new Square(18);

console.log(square1.square_area());
console.log(square2.total_sides());
