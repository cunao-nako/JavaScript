document.body.style.background = 'grey';

window.addEventListener('DOMContentLoaded', () => {
  let box = document.querySelector('.box'),
      button = document.querySelector('.button'),
      buttonIsClicked = false;

  button.addEventListener('click', () => {
    if (buttonIsClicked) { box.style.height = '350px'; }
    else { box.style.height = `${box.scrollHeight}px`; }
    buttonIsClicked = !buttonIsClicked;
  });
});

