// noinspection NonAsciiCharacters
let tabHeader = document.querySelectorAll('.tabheader__item'),
    currentActive = document.querySelector('.tabheader__item_active');

hideContent();

tabHeader.forEach(item => {
  item.addEventListener('click', event => {
    if ( event.target && event.target !== currentActive ) {
      let target = event.target;
      currentActive.classList.toggle('tabheader__item_active');
      target.classList.toggle('tabheader__item_active');
      currentActive = event.target;
      hideContent();
    }
  });
});

function hideContent() {
  let menuDescriptions = document.querySelectorAll('.tabcontent__descr');
  menuDescriptions.forEach(menu => {
    let text = menu.innerText;
    if ( text.includes(currentActive.innerText) ) {menu.parentElement.style.removeProperty('display'); }
    else { menu.parentElement.style.display = 'none'; }
  });
}

