let tabHeader = document.querySelectorAll('.tabheader__item'),
    currentActive = document.querySelector('.tabheader__item_active'),
    waitingIds = [],
    timerValue;

timer();

hideContent();

tabHeader.forEach(item => {
  item.addEventListener('click', event => {
    if ( event.target && event.target !== currentActive ) {
      changeContent(event.target);
      clearInterval(timerValue);
      waitingIds.forEach(id => {
        clearInterval(id);
      });
      let newId = setTimeout(timer, 3000);
      waitingIds.push(newId);
    }
  });
});

function autoSlide() {
  currentActive.classList.toggle('tabheader__item_active');
  if ( tabHeader[tabHeader.length - 1] === currentActive ) {
    tabHeader[0].classList.toggle('tabheader__item_active');
    currentActive = tabHeader[0];
  } else {
    currentActive.nextElementSibling.classList.toggle('tabheader__item_active');
    currentActive = currentActive.nextElementSibling;
  }
  hideContent();
}

function changeContent (target) {
  currentActive.classList.toggle('tabheader__item_active');
  target.classList.toggle('tabheader__item_active');
  currentActive = target;
  hideContent();
}

function hideContent() {
  let menuDescriptions = document.querySelectorAll('.tabcontent__descr');
  menuDescriptions.forEach(menu => {
    let text = menu.innerText;
    if ( text.includes(currentActive.innerText) ) { menu.parentElement.style.removeProperty('display'); }
    else { menu.parentElement.style.display = 'none'; }
  });
}

function timer() {
  timerValue = setInterval(autoSlide, 1000);
}