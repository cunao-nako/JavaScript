let personalMovieDB = {
  count: start(),
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

rememberMyFilms();
writeYourGenres();
console.log(detectPersonalLevel());
console.log(showPersonalMovieDB());

function start() {
  let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  if (numberOfFilms && (!isNaN(numberOfFilms))) { return numberOfFilms; }
  else { return start(); }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let movie = prompt('Один из последних фильмов что вы посмотрели?', '');
    let score = prompt('На сколько оцените его от 0 до 10?', '');
    if (movie && score && movie.length < 15) { personalMovieDB.movies[movie] = score; }
    else { i--; }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) { return 'Вы посмотрели мало фильмов!'; }
  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { return 'Вы классный зритель'; }
  else if (personalMovieDB.count >= 30) { return 'Вы киноман!'; }
  else { return 'Произошка ошибка'; }
}

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    if (genre && genre.length < 15) { personalMovieDB.genres.push(genre); }
    else { i--; }
  }
}

function showPersonalMovieDB() {
  if (personalMovieDB.privat) { return 'К сожалению список любимых фильмов пользователя - скрыт'; }
  else { return personalMovieDB; }
}