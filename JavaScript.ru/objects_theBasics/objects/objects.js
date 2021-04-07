// let userInformation = {
//     firstName: 'Igor',
//     secondName: 'Nikonov',
//     'Favorite programming language': 'Python',
//     isAdmin: false,
// }
//
// for (let key in userInformation) {
//     console.log(`${key}: ${userInformation[key]}`);
// }
//
// let property = prompt('Enter a property, which you want to change', '');
// if (property) {
//     if (property in userInformation) {
//         let value = prompt('Enter a new value', '');
//         userInformation[property] = value;
//         console.log(`New data: ${property}: ${userInformation[property]}`);
//
//     } else {
//         console.log('Sorry, there is no such property');
//     }
// } else {
//     console.log('Changing canceled');
// }
// // first exercise
// let user = {};
// user.name = 'Jhon';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// second exercise
// let schedule = {};
//
// console.log(isEmpty(schedule));
//
// schedule['9:30'] = 'time to get up!';
//
// console.log(isEmpty(schedule));
//
// function isEmpty(object) {
//     let result = ''
//     for (let key in schedule) {
//         result += key;
//     }
//     return !!result;
// }

// // third exercise
// let salary = {
//     Alan: 100,
//     Billy: 130,
//     Alice: 160,
// }
// let totalSalary = 0;
//
// console.log(sum());
//
// salary = {};
//
// console.log(sum());
//
// function sum() {
//     for (let key in salary) {
//         totalSalary += salary[key];
//     }
//     return totalSalary;
// }
//

// forth exercise
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] == "number") object[key] *= 2;
    }
}







