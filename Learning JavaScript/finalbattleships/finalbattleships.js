let view = {
    displayMessage: function(message) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = message;
    },
    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }
}

let model = {
    bordSize: 7,
    numShips: 3,
    shipLength: 3,
    ships: [{ locations: ["06", "16", "26"], lives: 3 },
            { locations: ["24", "34", "44"], lives: 3 },
            { locations: ["10", "11", "12"], lives: 3 }],
    fire: function(guess) {
        for (let i=0; i<this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index > -1) {
                delete ship.locations[index];
                ship.lives--;
                view.displayHit(guess);
                view.displayMessage('Hit!');
                if (this.isSunk(ship)) {
                    if (!this.numShips) {
                        view.message('You sunk all ships! Congratulations!')
                    }
                }
                break;
            } else {
                view.displayMiss(guess);
                view.displayMessage('Miss');
            }
        }
    },
    isSunk: function(ship) {
        if (!ship.lives) {
            this.numShips--;
            view.displayMessage('You sunk a ship!');
            return true;
        } else {
            return false;
        }
    }
}

let controller = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    playersGuess: function(guess) {
        if (guess.length < 3 && isNaN(guess[0]) && !isNaN(guess[1]) ) {
            guess = this.alphabet.indexOf(guess[0].toLowerCase()) + guess[1];
            model.fire(guess);
        } else {
            view.displayMessage('Input Error. Input two symbols of a location of your guess ( A-G | 0-6 )');
        }
    }
}

function init() {
    let fireButton = document.getElementById('fireButton');
    fireButton.onclick = handlerFireButton;
    console.log('корабли:', model.ships)
    // addEventListener("keydown", function(event) {
    //     if (event.key == 'Enter') {
    //         console.log('Enter отжат');
    //         handlerFireButton();
    //     } else {
    //         console.log(event.key, 'отжат');
    //     }
    // });
}

function handlerFireButton() {
    console.log()
    let guessInput = document.getElementById('guess');
    controller.playersGuess(guessInput.value);
    guessInput.value = '';
}

window.onload = init;