// Tabs

function tabs() {
  let tabHeader = document.querySelectorAll('.tabheader__item'),
  tabContent = document.querySelectorAll('.tabcontent'),
  currentActive = document.querySelector('.tabheader__item_active'),
  waitingIds = [],
  contentTimerValue;

  tabContent.forEach(tab => {
  tab.style.height = '550px';
  tab.style.width = '850px';
  });

  contentTimer();

  hideContent();

  tabHeader.forEach(item => {
  item.addEventListener('click', event => {
  if ( event.target && event.target !== currentActive ) {
    changeContent(event.target);
    clearInterval(contentTimerValue);
    waitingIds.forEach(id => {
      clearInterval(id);
    });
    let newId = setTimeout(contentTimer, 7000);
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
    let menuTexts = document.querySelectorAll('.tabcontent__descr');

    menuTexts.forEach(menu => {
    let text = menu.innerText;
    if ( text.includes(currentActive.innerText) ) { menu.parentElement.style.removeProperty('display'); }
    else { menu.parentElement.style.display = 'none'; }
  });
  }

  function contentTimer() { contentTimerValue = setInterval(autoSlide, 3000); }
}

export default tabs;