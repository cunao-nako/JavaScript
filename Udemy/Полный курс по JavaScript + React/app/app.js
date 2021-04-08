let personalMovieDB = {
  'count': 0,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false,
  'start': function () {
    let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    if (numberOfFilms && (!isNaN(numberOfFilms))) { this.count = numberOfFilms; }
    else { return this.start(); }
    },
  'rememberMyFilms': function () {
    for (let i = 0; i < 2; i++) {
      let movie = prompt('Один из последних фильмов что вы посмотрели?', '');
      let score = prompt('На сколько оцените его от 0 до 10?', '');
      if (movie && score && movie.length < 15) { this.movies[movie] = score; }
      else { i--; }
    }
  },
  'detectPersonalLevel': function () {
    if (this.count < 10) { return 'Вы посмотрели мало фильмов!'; }
    else if (this.count >= 10 && this.count < 30) { return 'Вы классный зритель'; }
    else if (this.count >= 30) { return 'Вы киноман!'; }
    else { return 'Произошка ошибка'; }
  },
  'writeYourGenres': function () {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (genre && genre.length < 15) { this.genres.push(genre); }
      else { i--; }
    }
    this.genres.forEach((item, index) => console.log(`Любимый жанр №${index + 1} - это ${item}`));
  },
  'showPersonalMovieDB': function () {
    if (this.privat) { return 'К сожалению список любимых фильмов пользователя - скрыт'; }
    else { return this; }
  },
  'toggleVisibleDB': function () {
    this.privat = !this.privat;
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB.detectPersonalLevel());
if (personalMovieDB.privat) {
  personalMovieDB.toggleVisibleDB();
  console.log(personalMovieDB.showPersonalMovieDB());
}
else { console.log(personalMovieDB.showPersonalMovieDB()); }
