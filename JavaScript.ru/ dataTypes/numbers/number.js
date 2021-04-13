document.body.style.background = 'black';
// // округление в меньшую сторону
// console.log(Math.floor(3.9)); // 3
//
// // округление в большую сторону
// console.log(Math.ceil(3.1)) // 4
//
// // округление до ближайщего целого
// console.log(Math.round(3.6)); // 4
// console.log(Math.round(3.4)); // 3
//
// // округление до определенного кол-ва знаков после точки
// let myNumber = 1.123456789
// myNumber = myNumber.toFixed(2); // '1.12'
// console.log(+myNumber); // 1.12
//
// // если число настолько большое что переполняет 64-х битное хранилище JS, то оно становится Infinity
// console.log(1e500); // Infinity
//
// // Object.is сравнивает два значения => true | false
// console.log(Object.is(2, 2));

// // first exercise
// let numberOne = +prompt('Enter first number:', ''),
//     numberSecond = +prompt('Enter second number:', '');
//
// if ( !isFinite(numberOne) && !isFinite(numberSecond) ) { console.log(numberOne + numberSecond); }
// else { console.log('Are you dumb?'); }
