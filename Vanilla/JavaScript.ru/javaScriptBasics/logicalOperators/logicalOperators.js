// // operator OR
// if (0 || 1) {
//     console.log('Always true');
// }
//
// let nickName;
// let firstName = null;
// let secondName = 'Suvorov';
// let name = nickName || firstName || secondName; // returned first truly result
// console.log(name);
//
// let x = 1;
// x > 10 || x++;
// console.log(`x = ${x}`);
//
//
// // operator AND
// if (0 && 1) {
//     console.log('Always false');
// }
//
// let catName = 'Barsik';
// let horseName = 'Silver';
// let dogName;
// let someonesName = catName && horseName && dogName; // returned first falsy result
// console.log(someonesName);
//
// let y = 1;
// y > 0 && y--;
// console.log(`y = ${y}`);
//
//
// // operator NO
// let falseVariable = false;
// if (!falseVariable) {
//     console.log('Always true');
// }
//
// let variableTrue = 'not empty string';
// let variableFalse = null;
// console.log(`Before converting to boolean: variableTrue = ${variableTrue}, after: ${!!variableTrue}`);
// console.log(`Before converting to boolean: variableFalse = ${variableFalse}, after: ${!!variableFalse}`);
//
// exercise
let login = prompt('Who are there?');
let password;
if (login) {
    if (login === "admin") {
        password = prompt('What is your password?');
        if (password) {
            if (password === "I am boss") {
                console.log("Welcome");
            } else {
                console.log('Wrong password');
            }
        } else {
            console.log('Canceled');
        }
    } else {
        console.log("I don't know you");
    }
} else {
    console.log('Canceled');
}