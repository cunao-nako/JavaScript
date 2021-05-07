const movieDB = {
  movies: [
    "Лига справедливости",
    "Логан",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ],
  showMovies: function () {
    let filmList = document.querySelector('.promo__interactive-list');
    filmList.innerHTML = '';
    this.movies.sort();
    this.movies.forEach((item, index) => {
      filmList.innerHTML += `<li class="promo__interactive-item">№${index + 1}: ${item}<div class="delete"></div></li>`;
    });

    document.querySelectorAll('.delete').forEach((item, index) => {
      item.addEventListener('click', () => {
        item.parentElement.remove();
        movieDB.movies.splice(index, 1);
        this.showMovies();
      });
    });
  },
};

movieDB.showMovies();

let addingForm = document.querySelector('.add');

addingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputTag = addingForm.querySelector('.adding__input'),
      newFileName = inputTag.value,
      isFavorite = addingForm.querySelector('[type = "checkbox"]');
  if (newFileName) {
    if (isFavorite.checked) { console.log('Добавляем любимый фильм');}
    if (newFileName.length > 21) { newFileName = newFileName.slice(0, 21) + '...'; }
    movieDB.movies.push(newFileName);
    event.target.reset();
    movieDB.showMovies();
    }
});
