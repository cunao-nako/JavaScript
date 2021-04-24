/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Лига справедливости",
        "Логан",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let advertising = document.querySelectorAll('.promo__adv img');
advertising.forEach((item) => {
    item.remove();
});

let poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url(img/bg.jpg)';

let genre = poster.querySelector('.promo__genre');
genre.textContent = 'Драма';

let filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, index) => {
  filmList.innerHTML += `<li class="promo__interactive-item">№${index + 1}: ${item}<div class="delete"></div></li>`;
});

