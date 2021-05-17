// MAP
let numbers = [1, 2, 3, 4, 5];

numbers = numbers.map(number => number * 2);

console.log(numbers);

// FILTER
let names = ['Jhon', 'Bill', 'Ann', 'Harry', 'Sarah', 'Alex'];

let shortNames = names.filter(name => name.length <= 3);

console.log(shortNames);

// REST OPERATOR
function restOperator(...parameters) { parameters.forEach(parameter => console.log(parameter)); }

restOperator(1, 2, 'Anna', 'Wally', 3, 4);

// SPRED OPERATOR
let myArrayNumbers = [1, 2, 3];
    maxNumber = Math.max(...myArrayNumbers);

console.log(maxNumber);

// SPREAD OBJECT OPERATOR
let user = {
  name: 'Jhon',
  surname: 'Smith',
  age: 35,
},
newUser = {...user};

console.log(newUser);

// OBJECT DECLARATION
let x = 25,
    y = 15;


// old declaration
// const coordinates = {
//   x: x,
//   y: y,
//   printCoordinates = function() { console.log('x:', this.x, 'y:', this.y); }
// }

//new declaration
const coordinates = {
  x,
  y,
  printCoordinates() { console.log('x:', this.x, 'y:', this.y)}
};

coordinates.printCoordinates();

// OBJECT DESTUCTURE
let user = {
  name: 'Jhon',
  surname: 'Smith',
  age: 35,
  carier: {
    proffession: 'Front-end developer',
    expirience: '5 years',
  },
};

const {name, surname, age, carier: {proffession, expirience}} = user;

console.log(name, surname, age, proffession, expirience);

// ARRAY DESTRUCTURE
let myArray = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d], [e, f]] = myArray;
console.log(a, b, c, d, e, f);

// NEW JS PATERNS 
function connect({
  host = 'localhost',
  port = 3000,
  user = 'default',
} = {}) { console.log(`host: ${host}, port: ${port}, user: ${user}`); }

connect(
  {
    host: '127.0.0.0.1',
    port: 80,
    user: 'root',
  }
)
connect();
