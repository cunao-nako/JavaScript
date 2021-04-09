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
  },
};

movieDB.showMovies();

let addingForm = document.querySelector('.add'),
    deleteIcons = document.querySelectorAll('.delete');

addingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputTag = addingForm.querySelector('.adding__input'),
      newFileName = inputTag.value,
      isFavorite = addingForm.querySelector('[type = "checkbox"]');
  if (newFileName) {
    if (isFavorite.checked) { console.log('Добавляем любимый фильм');}
    if (newFileName.length > 21) { newFileName = newFileName.slice(0, 21) + '...'; }
    movieDB.movies.push(newFileName);
    inputTag.value = '';
    isFavorite.checked = false;
    movieDB.showMovies();
    }
});

deleteIcons.forEach(item => {
  item.addEventListener('click', (event) => {
    let contentToDelete = event.target.parentElement,
        filmName = contentToDelete.innerText.slice(4).toLowerCase();
    console.log(filmName);
    movieDB.movies =  movieDB.movies.filter(item => item.toLowerCase() !== filmName);
    contentToDelete.remove();
  });
});