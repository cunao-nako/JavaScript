let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
    guess = prompt('Введите координату коробля (0 до 6)');
    if (guess == null) {
        break;
    }
    if (guess => 0 && guess <= 6 && !isNaN(guess)) {
        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert('Попал!')
            if (hits == 3) {
                isSunk = true;
                alert('Корабль потоплен!')
            }
        } else
            alert('Мимо!')
        guesses += 1;
    } else {
        alert('Пожалуйста введите координаты от 0 до 6');
    }
}

let stats = 'Вам потребовалось ' + guesses + ' попыток чтобы потопить корабль. ' + 'Вы стреляли с точностью = ' + (3/guesses)
alert(stats)