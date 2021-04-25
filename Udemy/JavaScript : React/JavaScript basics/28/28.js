// Получение элементов со страницы

let box = document.getElementById('box');
console.log(box);

let buttons = document.getElementsByTagName('button');
console.log(buttons);

let circles = document.getElementsByClassName('circle');
console.log(circles);

let hearts = document.querySelectorAll('.heart');

hearts.forEach(item => console.log(item));

let oneHearth = document.querySelector('.heart');
console.log(oneHearth);