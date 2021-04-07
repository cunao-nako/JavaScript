// let test = {
//     test0: null,
//     test1: 'abc',
//     test2: 123,
//     test3: true,
//     test4: {},
//     test5: [],
//     test9: function () {
//         alert('hi')
//     },
//     test10: undefined
// }

// for (let i in test) {
//     console.log(i, '=', test[i], '. Тип данных:', typeof test[i])
// }
// let array = new Array('01', 'b', 'c')
// // let array = Array['a', 'b', 'c'];

// let guess = prompt('Введите символ:');
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// if ((guess.length < 3) && isNaN(guess[0]) && !isNaN(guess[1])) {
//     guess = alphabet.indexOf(guess[0].toLowerCase()) + guess[1];
//     console.log(guess);
// } else {
//     console.log('ошибка');
// }
// function init() {
//     addEventListener("keydown", function(event) {
//         if (event.key == 'Enter') {
//             console.log('Нажат ENTER');
//             checkEnter();
//         } else {
//             console.log(event.key);
//         }
//     });
// }

// function buttonHandler(event) {
//     event.preventDefault();
//     if (event.key == 'Enter') {
//         event.preventDefault();
//         console.log('превентнули');
//     } else {
//         console.log('отжали кнопку');
//     }
// }

// function checkEnter(){
//     console.log('Сработало по enter\'у');
// }

function init() {
    let numberOfShips = prompt('Введите кол-во кораблей');
    let ships = [];
    for (let i=0; i<numberOfShips; i++) {
        let flip = Math.floor(random() * 1);
        console.log('flip =', flip);
        if (flip) {
            let first_number = Math.floor(random() * 6);
        }

        ships.push(locations[Math.random() * 9])
    }
}



window.onload = init;
