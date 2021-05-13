function form() {
  
  const modal = require('./modal');

  let forms = document.querySelectorAll('form'),
    message = {
      loading: 'img/form/spinner.svg',
      success: 'Успешно!',
      fail: 'Что-то пошло не так...',
    },
    spinner = document.createElement('img'),
    spinnerExists = false;

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

      postData('http://localhost:3000/requests', json)
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

  function showModalWindow() {
    console.log('показываю');
    modal.modalWindow.style.display = 'inline';
    document.body.style.overflow = 'hidden';
  }

  function closeModalWindow() {
    if (modal.modalWindow.querySelector('.new')) { modal.modalWindow.querySelector('.new').remove(); }
    if (modal.modalWindow.querySelector('.modal__dialog').getAttribute('style')) {
      modal.modalWindow.querySelector('.modal__dialog').removeAttribute('style');
    }
    modal.modalWindow.style.display = 'none';
    document.body.style.overflow = '';
    spinner.remove();
    spinnerExists = false;
  }
}

module.exports = form;

// библиотека axios заместо fetch();
// axios.get('http://localhost:3000/menu')
//     .then(result => {
//       result.data.forEach(({img, altimg, title, descr, price}) => {
//         new MenuItem(img, altimg, title, descr, price, '.menu .menu__field .container').render(); });
// });