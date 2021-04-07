// // first exercise
// let browser = prompt('Which browser do you use?', '');
//
// if (browser == 'Edge') {
//     console.log("You've got the Edge");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     console.log('Okay we support these browser too');
// } else {
//     console.log('We hope that page look ok');
// }

// second exercise
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        console.log('0');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
    case 3:
        console.log('2 or 3');
        break;
}