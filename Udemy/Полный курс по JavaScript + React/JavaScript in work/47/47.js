'use strict';
document.body.style.background = 'black';
class Rectangle {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() { return this.height * this.width; }
}

class ColoredRectangle extends Rectangle {
  constructor (height, width, color) {
    super();
    this.color = color;
  }
}

let square = new Rectangle(2, 2);
console.log(square.calcArea());
