// объекты в JS - OOP
// first exercise
// function foo() {
//     return {name: 'Jhon', ref() {return this}};
// }
//
// let user = foo();
// console.log(user.ref().name)

// second exercise
// let calculator = {
//     read: function () {
//         this.firstNumber = +prompt('Enter first number', 0);
//         this.secondNumber = +prompt('Enter second number', 0);
//     },
//     sum() {
//         return this.firstNumber + this.secondNumber;
//     },
//     mul() {
//         return this.firstNumber * this.secondNumber;
//     },
// }
//
// calculator.read();
// console.log( `${calculator.firstNumber} + ${calculator.secondNumber} =`, calculator.sum() );
// console.log( `${calculator.firstNumber} * ${calculator.secondNumber} =`, calculator.mul() );

// third exercise
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;

    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(`step = ${this.step}`);
        return this;
    }
}

ladder.up().up().up().showStep()

