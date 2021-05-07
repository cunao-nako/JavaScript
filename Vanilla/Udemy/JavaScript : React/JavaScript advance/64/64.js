'use strict';

document.body.style.backgroundColor = 'white';

let form = document.querySelector('.form-signin'),
    loginForm = document.querySelector('.login'),
    mainPage = document.querySelector('.main'),
    leaveBtn = mainPage.querySelector('.logout'),
    changeBtn = document.querySelectorAll('.change'),
    greetingH2 = mainPage.querySelector('.greeting'),
    nextColor;

leaveBtn.addEventListener('click', showLogin);

let colors = ['white', 'purple', 'lightgreen', 'lightblue', 'orange'];
changeBtn.forEach(btn => { btn.addEventListener('click', changeColor); });

form.addEventListener('submit', event => {
  event.preventDefault();

  let data = Object.fromEntries(new FormData(event.target)),
      nickname = data.nickname,
      checkbox = data.checkbox;

  if (!checkbox) { localStorage.setItem('nickname', nickname); }
  showMain(nickname);

  event.target.reset();
});

function changeColor() {
  nextColor = colors.indexOf(document.body.style.backgroundColor) + 1;
  if (nextColor === colors.length) { nextColor = 0; }
  document.body.style.backgroundColor = colors[nextColor];
  localStorage.setItem('colorIndex', colors.indexOf(document.body.style.backgroundColor));
}

function showMain(nickname) {
  greetingH2.textContent =`Hello, ${nickname}`;
  loginForm.classList.toggle('show');
  loginForm.classList.toggle('hide');
  mainPage.classList.toggle('hide');
  mainPage.classList.toggle('show');
}

function showLogin() {
  localStorage.clear();
  document.body.style.backgroundColor = 'white';
  greetingH2.textContent = '';
  loginForm.classList.toggle('hide');
  loginForm.classList.toggle('show');
  mainPage.classList.toggle('show');
  mainPage.classList.toggle('hide');
}

function setColor() {
  console.log(localStorage.getItem('colorIndex'));
  if (localStorage.getItem('colorIndex')) { nextColor = +localStorage.getItem('colorIndex'); }
  else { nextColor = 0; }
  document.body.style.backgroundColor = colors[nextColor];
  localStorage.setItem('colorIndex', colors.indexOf(document.body.style.backgroundColor));
}

function onLoad() {
  if (localStorage.getItem('nickname').length) {showMain(localStorage.getItem('nickname')); }
  else { showLogin(); }
  setColor();
}

window.onload = onLoad;
