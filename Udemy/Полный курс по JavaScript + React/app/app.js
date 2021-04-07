let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let i = 0;
// while (i < 2) {
//   let movie = prompt('Один из последних фильмов что вы посмотрели?', '');
//   let score = prompt('На сколько оцените его от 0 до 10?', '');
//   if (movie && score && movie.length < 50) {
//     personalMovieDB.movies[movie] = score;
//     i++;
//   }
// }

// let i = 0;
// do {
//   let movie = prompt('Один из последних фильмов что вы посмотрели?', '');
//   let score = prompt('На сколько оцените его от 0 до 10?', '');
//   if (movie && score && movie.length < 50) {
//     personalMovieDB.movies[movie] = score;
//     i++;
//   }
// } while(i < 2);

for (let i = 0; i < 2;) {
  let movie = prompt('Один из последних фильмов что вы посмотрели?', '');
  let score = prompt('На сколько оцените его от 0 до 10?', '');
  if (movie && score && movie.length < 50) {
    personalMovieDB.movies[movie] = score;
    i++;
  }
}

if (personalMovieDB.count < 10) {console.log('Вы посмотрели мало фильмов!');}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {console.log('Вы классный зритель');}
else if (personalMovieDB.count >= 30) {console.log('Вы киноман!');}
else {console.log('Произошка ошибка');}


console.log(personalMovieDB);