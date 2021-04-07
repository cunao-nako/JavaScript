// int
let int = 1234;
console.log(int, 'dataType = ' + typeof int);
// bigInt
let bigInt = 111111212121212121212121212212121212121212121212n
console.log(bigInt, 'dataType = ' + typeof bigInt);

// string
let string = 'symbols'
console.log(string, 'dataType = ' + typeof string);
let newString = `I want to put here some new ${string}`
console.log(newString, 'dataType = ' + typeof newString);

// boolean
let isTrue = 5 > 1
console.log(isTrue, 'dataType = ' + typeof isTrue)

// null
let notExist = null;
console.log(notExist, typeof notExist);

// undefined
let notExistYet = undefined;
console.log(notExistYet, 'dataType = ' + typeof notExistYet)
