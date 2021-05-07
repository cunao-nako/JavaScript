// // if / else construction
// let accessAllowed;
// let age = prompt('What is your age?', '');
// if (age >= 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }
// if (accessAllowed) {
//     console.log('allowed');
// } else {
//     console.log('denied');
// }
//
// // ? construction
// let usersAge = prompt('What is your age?', '');
// let access = (usersAge >= 18) ? 'allowed' : 'denied';
// console.log(access);
//
// // if / else construction
// let AgeUsers = prompt('WWhat is your age?', '');
// if (AgeUsers < 3) {
//     console.log('Hi, baby!');
// } else if (AgeUsers < 18) {
//     console.log('Hi!');
// } else if (AgeUsers < 100) {
//     console.log('Hello');
// } else {
//     console.log('What a strange age!');
// }
//
// // ? construction
// let personsAge = prompt('What is your age?', '');
// let message = (personsAge < 3) ? 'Hello, baby!' :
//                   (personsAge < 18) ? 'Hi':
//                       (personsAge < 100) ? 'Hello!' : 'What a strange age!';
// console.log(message);

// // first exercise
// let guess = prompt('What is an official name of JavaScript', '');
// let message = (guess == 'ECMAScript') ? 'Correct!' : 'Incorrect, "ECMAScript"';
// alert(message);

// // second exercise
// let number = prompt('Please enter a number','');
// if (number > 0) {
//     console.log(1);
// } else if (number < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }

// // third exercise
// let firstNumber = +prompt('Enter first number', '');
// let secondNumber = +prompt('Enter second number', '');
// let message = (firstNumber + secondNumber < 4) ? 'Smaller' : 'Bigger';
// console.log(message);

// forth exercise
let login = prompt('Enter your position', '');
let message = (login == 'Worker') ? 'Hi!' :
                  (login == 'Director') ? 'Hello!' :
                      (login == '') ? 'No login found' : '';
console.log(message)