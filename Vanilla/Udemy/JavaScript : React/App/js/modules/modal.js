// Modal windows
function modal() {

  const form = require('./form');

  let modalWindowButtons = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal');

  modalWindowButtons.forEach(button => button.addEventListener('click', showModalWindow));

  modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow || event.target.getAttribute('data-close') === '') {
      closeModalWindow();
      modalWindow.querySelector('form').reset();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modalWindow.style.display !== 'none') {
      closeModalWindow();
      modalWindow.querySelector('form').reset();
    }
  });
}

module.exports = modal;