let buttons = document.querySelectorAll('button');

buttons.forEach(item => {
  item.addEventListener('click', (event) => { console.log(event.currentTarget); });
});

let link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
});

let body = document.querySelector('body');

body.addEventListener('copy',  (event) => {
  event.preventDefault();
  console.log('А хуй тебе');
});

// body.addEventListener('select',  (event) => {
//   event.preventDefault();
//   console.log('А хуй тебе');
// });