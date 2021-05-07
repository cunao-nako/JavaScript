// // for loop
// let number = 5;
// for (let i = 0; i < number; i++) {
//     console.log(`In for loop: iteration # ${i}`);
// }
//
// // whole loop
// let i = 0;
// while (i < number) {
//     console.log(`In while loop: iteration # ${i}`);
//     i++;
// }
//
// // loops labels
// loop: while (true) {
//     let i = prompt('Infinity input', '');
//     if (i) {
//         console.log(i);
//     } else {
//         break loop;
//     }
// }
// console.log('Loop has been ended');
//
// newLoop: while (true) {
//     console.log('Start of while loop');
//     let i = prompt('Enter your name', '');
//     if (i) {
//         for (let j = 0; j < i.length; j++) {
//             if (i[j] != 'о') {
//                 console.log(i[j]);
//             } else {
//                 continue newLoop;
//             }
//         }
//     } else {
//         console.log('Incorrect input!');
//         continue newLoop;
//     }
// }
// console.log('Loop has been ended');

// // first exercise
// for (let i = 2; i < 11; i++) {
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }
//
// // second exercise
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }
//
// // third exercise
// loop: while (true) {
//     let number = prompt('Enter a number > 100', '');
//     if (number) {
//         if (number > 100) {
//             console.log('Thanks');
//             break;
//         } else {
//             console.log('Incorrect input');
//             continue loop;
//         }
//     } else {
//         break loop;
//     }
// }
// console.log('Loop has been ended');

// forth exercise
let number = +prompt('Enter a number > 1', '2');
loop: for (let i = 1; i < number; i++) {
    for (let j = 1; j < i; j++) {
        if (!(i % j)) continue loop;
    }
    console.log(i);
}