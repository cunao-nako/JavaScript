// let text = 'some text';
// console.log('Before defining functions');
//
// function useless(ninjaCallBack) {
//     console.log('in useless function');
//     return ninjaCallBack();
// }
//
// function getText() {
//     console.log('in getText() function');
//     return text;
// }
//
// console.log('Before making calls');
//
// useless(getText) === text ? console.log('useless works') : console.log("useless didn't work");
//
// console.log('all calls has been made');

// let myArray = [0, 3, 5, 2, 4, 9, 7, 6, 8, 10, 1];
//
// myArray.sort(function (number1, number2) {
//     return number1 - number2;
// })
//
// console.log(myArray);

// let store = {
//     id: 1,
//     cash: {},
//     add(functionName) {
//         if (!functionName.id) {
//             functionName.id = this.id++;
//             this.cash[functionName.id] = functionName;
//             return true;
//         }
//     },
// };
//
// function ninja() {
//     console.log('function ninja');
//     store.add(ninja);
// }
// function text() {
//     console.log('function text');
//     store.add(text);
// }
// function getSomething() {
//     console.log('function get');
//     store.add(getSomething);
// }
//
// ninja();
// getSomething();
// text();
// console.log(store);

function isPrimitive(value) {
    if (!isPrimitive.answers) {isPrimitive.answers = {};}
    if (!isPrimitive.answers[value] !== undefined) {return isPrimitive.answers[value];}
}