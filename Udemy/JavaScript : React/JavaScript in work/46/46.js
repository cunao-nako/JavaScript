'use strict';
document.body.style.background = 'grey';
// // this в обычной функции - window, если 'use strict' - undefined
// document.body.style.background = 'black';
// function showThis() {
//   console.log(this);
// }
// showThis();
//
// // this в методе объекта - сам объект
// let someObj = {
//   someProperty: 'bla-bla-bla',
//   anotherProperty: 'la-la-la',
//   someMethod: function () {
//     return `${this.someProperty} ${this.anotherProperty}`;
//   }
// };
//
// console.log(someObj.someMethod());
// // ручная привязка контента this
// function someFunction(surname) {
//   console.log(this);
//   console.log(`${this.name} ${surname}`);
// }
//
// let person = {
//   name: 'Jhon',
// };
//
// someFunction.call(person, 'Smith');
// someFunction.apply(person, ['Smith']);

let button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log(this);
});