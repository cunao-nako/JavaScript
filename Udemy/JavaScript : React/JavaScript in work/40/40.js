document.querySelector('body').style.background = 'black';
// let now = new Date();
// console.log(now);
// console.log(now.getUTCFullYear());

// let date = new Date();
// console.log(date);
// date.setHours(14);
// console.log(date);

let start = new Date();

for (let i = 0; i < 99999999; i++) { let j = i**i; }
let end = new Date();
console.log(end - start);
