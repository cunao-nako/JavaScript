function form() {
  let forms = document.querySelectorAll('form'),
    message = {
      loading: 'img/form/spinner.svg',
      success: 'Успешно!',
      fail: 'Что-то пошло не так...',
    },
    spinner = document.createElement('img'),
    spinnerExists = false,
    modal = document.querySelector('.modal');

  forms.forEach(form => bindPostData(form));

  const postData = async (url, data) => {
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data,
    });
    return await result.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (event) => {

      let formData = new FormData(form);

      event.preventDefault();

      if (!spinnerExists) {
        spinnerExists = true;
        spinner.src = message.loading;
        spinner.style.cssText = 'display: block; margin: 0 auto;';
        form.insertAdjacentElement('afterend', spinner);
      }

      let json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://127.0.0.1:5500/Vanilla/Udemy/JavaScript%20%3A%20React/App/db.json', json)
          .then(() => {
            feedBack(message.success);
            spinner.remove();
            spinnerExists = false;
          })
          .catch(() => { feedBack(message.fail); })
          .finally(() => { form.reset(); });
    });
  }

  function feedBack(message) {
    let prevDialog = modal.modalWindow.querySelector('.modal__dialog');

    if (modal.modalWindow.querySelector('.new')) { modal.modalWindow.querySelector('.new').remove(); }

    prevDialog.setAttribute('style', 'display: none;');

    let newDialog = document.createElement('div');
    newDialog.classList.add('modal__dialog', 'new');
    newDialog.innerHTML =
        `<div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
          </div>`;
    modal.modalWindow.append(newDialog);
    showModalWindow();
  }
}

function showModalWindow() {
  let modal = document.querySelector('.modal');
  modal.style.display = 'inline';
  document.body.style.overflow = 'hidden';
}

function closeModalWindow() {
  let modal = document.querySelector('.modal');
  if (modal.querySelector('.new')) { modal.querySelector('.new').remove(); }
  if (modal.querySelector('.modal__dialog').getAttribute('style')) {
    modal.querySelector('.modal__dialog').removeAttribute('style');
  }
  modal.style.display = 'none';
  document.body.style.overflow = '';
  spinner.remove();
  spinnerExists = false;
}

export default form;

export {showModalWindow};
export {closeModalWindow};

// библиотека axios заместо fetch();
// axios.get('http://localhost:3000/menu')
//     .then(result => {
//       result.data.forEach(({img, altimg, title, descr, price}) => {
//         new MenuItem(img, altimg, title, descr, price, '.menu .menu__field .container').render(); });
// });