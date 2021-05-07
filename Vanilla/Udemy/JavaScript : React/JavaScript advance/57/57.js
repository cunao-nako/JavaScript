document.body.style.background = 'black';

// // .filter
// let names = ['Alice', 'Jhon', 'Voldemar', 'Ann'],
// shortNames = names.filter(name => name.length < 5);
// console.log(shortNames);

// // .map
// let answers = ['AlicE', 'JhoN', 'VoldEmar', 'ANn'];
// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

// // every/some
// let myArrayForSome = [4, '1', 'one'];
// console.log(myArrayForSome.some(item => typeof item === 'number'));
// let myArrayForEvery = ['4', '1', 'one'];
// console.log(myArrayForEvery.every(item => typeof item === 'string'));

// // reduce
// let arrayForReduce = [1, 2, 3, 4, 5],
//     sum = arrayForReduce.reduce((total, item) => total + item);
// console.log(sum);
// вторым аргументов в reduce можно передать стартовое значение
// let fruitsArray = ['apple', 'pear', 'mango', 'orange'],
//     buyList = fruitsArray.reduce((total, item) => `${total} ${item}`, 'List:');
// console.log(buyList);

// // test
let obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal',
};

let newObj = Object.entries(obj).filter(item => item.includes('person'));

console.log(newObj);