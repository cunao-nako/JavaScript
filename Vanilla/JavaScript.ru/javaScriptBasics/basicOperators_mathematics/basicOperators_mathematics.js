// унарный -
let x = 1;
console.log('x =', x);
x = -x;
console.log('-x =', x);

// унарный +
let y = '1';
console.log(`y = ${y}, dataType = ${typeof y}`);
y = +y;
console.log(`y = ${y}, dataType = ${typeof y}`);

// задание
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 12