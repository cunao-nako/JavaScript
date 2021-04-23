window.addEventListener('DOMContentLoaded', () => {

  // Special Offer Timer
  let specialFinishDate = new Date(2021, 4, 10),
    days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds'),
    startCountDown = setInterval(changeTimer, 100);

  changeTimer();

  function changeTimer() {
    let currentDate = new Date(),
        countDownDate = specialFinishDate - currentDate;
    if (countDownDate >= 0) {
      let daysLeft = Math.floor(countDownDate / 864e5),
          hoursLeft = Math.floor((countDownDate - daysLeft * 864e5) / 36e5),
          minutesLeft = Math.floor((countDownDate - daysLeft * 864e5 - hoursLeft * 36e5) / 6e4),
          secondsLeft = Math.floor((countDownDate - daysLeft * 864e5 - hoursLeft * 36e5 - minutesLeft * 6e4) / 1000);
      days.innerText = timeChecker(daysLeft);
      hours.innerText = timeChecker(hoursLeft);
      minutes.innerText = timeChecker(minutesLeft);
      seconds.innerText = timeChecker(secondsLeft);
    } else { clearInterval(startCountDown); }
    function timeChecker(number) {
      if ( number < 10 ) { return '0' + number; }
      else { return number; }
    }
  }

  // Tabs
  let tabHeader = document.querySelectorAll('.tabheader__item'),
    currentActive = document.querySelector('.tabheader__item_active'),
    waitingIds = [],
    contentTimerValue;

  contentTimer();

  hideContent();

  tabHeader.forEach(item => {
    item.addEventListener('mouseenter', event => {
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
    let menuDescriptions = document.querySelectorAll('.tabcontent__descr');

    menuDescriptions.forEach(menu => {
      let text = menu.innerText;
      if ( text.includes(currentActive.innerText) ) { menu.parentElement.style.removeProperty('display'); }
      else { menu.parentElement.style.display = 'none'; }
    });
  }

  function contentTimer() {
    contentTimerValue = setInterval(autoSlide, 3000);
  }

  // Modal windows
  let modalWindowButtons = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal'),
      modalCloser = document.querySelector('.modal__close');

  modalWindowButtons.forEach(button => {
    button.addEventListener('click', showModalWindow);
  });

  modalCloser.addEventListener('click', closeModalWindow);

  window.addEventListener('scroll', showModalWindowOnce);

  modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow) { closeModalWindow(); }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modalWindow.style.display !== 'none') {
      closeModalWindow();
      console.log('esc');
    }
  });

  function showModalWindowOnce() {
    if ( window.scrollY + document.documentElement.clientHeight >= document.documentElement.offsetHeight ) {
      modalWindow.style.display = 'inline';
      document.body.style.overflow = 'hidden';
      window.removeEventListener('scroll', showModalWindowOnce);
    }
  }
  function showModalWindow() {
    modalWindow.style.display = 'inline';
    document.body.style.overflow = 'hidden';
  }

  function closeModalWindow() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = '';
  }

  // On Top
  let peper = document.querySelector('.pepper').querySelector('[alt="pepper"]');
  peper.addEventListener('click', () => {
    document.documentElement.scrollTo(0, 0);
  });

  // Offer imgs
  let offerImgs = document.querySelectorAll('.offer__slide'),
      arrayOfImg = [],
      indicatorCurrent = document.querySelector('#current'),
      indicatorTotal = document.querySelector('#total'),
      next = document.querySelector('[data-next]'),
      prev = document.querySelector('[data-prev]'),
      currentImg,
      arrayOfCanceling = [],
      interval;

  hideOfferImg();
  runAutoSlidingImg();

  next.addEventListener('click', () => {
    currentImg.style.display = 'none';
    let indexNextImg = arrayOfImg.indexOf(currentImg) + 1;
    if (indexNextImg > arrayOfImg.length - 1) { indexNextImg = 0; }
    currentImg = arrayOfImg[indexNextImg];
    currentImg.style.display = 'inline';
    indicatorCurrent.innerText = `0${indexNextImg + 1}`;
    clearInterval(interval);
    arrayOfCanceling.forEach(item => {
      clearInterval(item);
    });
    let newAutoSliding = setTimeout(runAutoSlidingImg, 3500);
    arrayOfCanceling.push(newAutoSliding);

  });

  prev.addEventListener('click', () => {
    currentImg.style.display = 'none';
    let indexNextImg = arrayOfImg.indexOf(currentImg) - 1;
    if (indexNextImg < 0) { indexNextImg = arrayOfImg.length - 1; }
    currentImg = arrayOfImg[indexNextImg];
    currentImg.style.display = 'inline';
    indicatorCurrent.innerText = `0${indexNextImg + 1}`;
    clearInterval(interval);
    arrayOfCanceling.forEach(item => {
      clearInterval(item);
    });
    let newAutoSliding = setTimeout(runAutoSlidingImg, 3500);
    arrayOfCanceling.push(newAutoSliding);
  });

  function hideOfferImg() {
    indicatorCurrent.innerText = '01';
    indicatorTotal = offerImgs.length;
    offerImgs.forEach(img => {
      if (img === offerImgs[0]) {
        img.style.display = 'inline';
        currentImg = img;
        arrayOfImg.push(img);
      }
      else {
        img.style.display = 'none';
        arrayOfImg.push(img);
      }
    });
  }

  function autoSlideImg() {
    currentImg.style.display = 'none';
    let indexNextImg = arrayOfImg.indexOf(currentImg) + 1;
    if (indexNextImg > arrayOfImg.length - 1) { indexNextImg = 0; }
    currentImg = arrayOfImg[indexNextImg];
    currentImg.style.display = 'inline';
    indicatorCurrent.innerText = `0${indexNextImg + 1}`;
  }

  function runAutoSlidingImg() {
    interval = setInterval(autoSlideImg, 2500);
  }

});