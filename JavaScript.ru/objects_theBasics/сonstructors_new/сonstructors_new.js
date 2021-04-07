// first exercise
// function Calculator() {
//     this.read = function() {
//         this.firstNumber = +prompt('Enter first number', 0);
//         this.secondNumber = +prompt('Enter second number', 0);
//         },
//     this.sum = function () {
//         return this.firstNumber + this.secondNumber;
//     },
//     this.mul = function () {
//         return this.firstNumber * this.secondNumber;
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
// console.log(`${calculator.firstNumber} + ${calculator.secondNumber} =`, calculator.sum());
// console.log(`${calculator.firstNumber} * ${calculator.secondNumber} =`, calculator.mul());

// second exercise
// function Accumulator(startingValue) {
//     this.value = +startingValue;
//     this.read = function () {
//         this.value += +prompt('Enter additional value:', 0);
//     }
// }
//
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);