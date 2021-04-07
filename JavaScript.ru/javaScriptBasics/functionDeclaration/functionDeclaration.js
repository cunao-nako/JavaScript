// first exercise
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
//
// let age = prompt('What is your age?', '');
// console.log(checkAge(age) ? 'allowed' : 'denied');
// second exercise
// function getMin(a, b) {
//     return (a > b) ? b : a;
// }
// let a = +prompt('Enter first number', '');
// let b = +prompt('Enter second number', '');
// console.log(`Минимальное из чисел = ${getMin(a, b)}`)
// third exercise
// function getPow(number, pow) {
//     let result = number;
//     for (let i = 1; i < pow; i++) {
//         result *= number;
//     }
//     return result;
// }
// let number = +prompt('Enter number', '');
// let pow = +prompt("Enter it's pow", '');
// if (pow < 0) {
//     console.log('incorrect pow');
// } else {
//     console.log(`${number} in pow ${pow} = ${getPow(number, pow)}`);
// }