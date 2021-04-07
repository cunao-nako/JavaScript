// .indexOf()

let textOne = "there's the dog sitting at index";

let indexedDog = textOne.indexOf('dog');

let indexedThe = textOne.indexOf('the', 5);


console.log('indexedDog =', indexedDog)
console.log('indexedThe =', indexedThe);


// .substring()

let textTwo = 'name|phone|address';

let substringedPhone = textTwo.substring(5, 10)

console.log("substringedPhone =", substringedPhone);

let substringedAddress = textTwo.substring(11);

console.log("substringedAddress = ", substringedAddress);


// .splite()

let textThree = 'name|phone|address';

let textThreeSplited = textThree.split('|');

console.log('textThreeSplited =', textThreeSplited);


// .toLowerCase()

let textFour = 'CAPITAL WORDS';

let textFourLowerCased = textFour.toLocaleLowerCase();

console.log('textFourLowerCased =', textFourLowerCased);

// .toLowerCase()

let textEight = 'lower words';

let textEighttoUpperCase = textEight.toUpperCase();

console.log('textEighttoUpperCase =', textEighttoUpperCase);


// .replace()

let textFive = 'a string with some symbols';

let textFiveReplaced = textFive.replace(/s/gi, 'z')

console.log('textFiveReplaced =', textFiveReplaced);

// .slice()

let textSix = 'text for slicing with new method';

let textSixSliced = textSix.slice(4);

console.log('textSixSliced =', textSixSliced);

// .trim()

let textSeven = ' sting to test method trim ';

console.log('Длина textSeven до .trim() =', textSeven.length)

let textSevenTrimed = textSeven.trim()

console.log('Длина textSeven после .trim() =', textSevenTrimed.length)