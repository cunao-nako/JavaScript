let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let movie = prompt('Один из последних фильмов что вы посмотрели?', '');
  let score = prompt('На сколько оцените его от 0 до 10?', '');
  personalMovieDB.movies[movie] = score;
}

console.log(personalMovieDB);