// Получение элементов со страницы

let box = document.getElementById('box'),
    button = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHearth = document.querySelector('.heart');


let myDiv = document.createElement('div');
myDiv.classList.add('black');

myDiv.innerHTML = '<h1>Hello</h1>'; // помещение html структуры

myDiv.insertAdjacentHTML('', '<h3>Hello, World!</h3>');

// myDiv.textContent = 'Hello, world!'; // помещение текста внутрь структуры

// document.querySelector('.box').append(myDiv);  // добавление элемента в конец тега <body>

// document.querySelector('.wrapper').prepend(myDiv); // добавление элемента в начало тега с классом .wrapper

// document.querySelector('.wrapper').after(myDiv); // добавление элемента после тега с классом .wrapper

document.querySelector('.wrapper').before(myDiv); // добавление элемента перед тегом с классом .wrapper

// hearts[0].replaceWith(myDiv); // замена одного элемента другим

// hearts[0].remove(); // удаление элемента со страницы