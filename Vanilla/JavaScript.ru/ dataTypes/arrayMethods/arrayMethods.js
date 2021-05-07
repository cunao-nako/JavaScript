// // first exercise
// function camelize(str) {
//   let result = '';
//   str = str.split('-');
//
//   for (let word in str) {
//     if (+word !== 0 && str[word]) { str[word] = str[word][0].toUpperCase() + str[word].slice(1); }
//     result += str[word];
//   }
//   return result;
// }
//
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// // second exercise
// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => { return b - a; });
// console.log(arr);

// // third exercise
// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// console.log(sorted ); // CSS, HTML, JavaScript
// console.log(arr );
//
// function copySorted(array) {
//   let arrayCopy = [];
//   array.forEach(item => {arrayCopy.push(item); });
//   return arrayCopy.sort();
// }

// // forth exercise
// function Calculator() {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   };
//   this.calculate = function(equation) {
//     equation = equation.split(' ');
//     let firstOperand = +equation[0],
//         operation = equation[1],
//         secondOperand = +equation[equation.length - 1];
//     if ( !this.methods[operation] || isNaN(firstOperand) || isNaN(secondOperand) ) { return NaN; }
//     else { return this.methods[operation](firstOperand, secondOperand); }
//   };
//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }
//
// let calc = new Calculator;
// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);
// console.log( calc.calculate("3 + 7") ); // 10
// console.log( calc.calculate("3 * 7") ); // 10
// console.log( calc.calculate("3 / 7") ); // 10
// console.log( calc.calculate("3 ** 7") ); // 10

// // fifth exercise
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(item => item.name)
//
// console.log( names ); // Вася, Петя, Маша

// // six exercise
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = [];
//
// for ( let entry of users ) { usersMapped.push({fullName: `${entry['name']} ${entry['surname']}`, id: entry['id']}); }
//
// console.log( usersMapped );
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

// // seventh exercise
// function sortByAge(users) {
//   users.sort((a, b) => a.age - b.age);
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// // eights exercise
// function getAverageAge(users) {
//   let result = 0;
//   users.forEach(item => { result += item.age; })
//   return result / users.length;
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// // ninth exercise
// function unique(arr) {
//   let array = [];
//   arr.forEach(item => { if ( !array.includes(item) ) { array.push(item); } });
//   return array;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
//
// console.log( unique(strings) ); // кришна, харе, :-O