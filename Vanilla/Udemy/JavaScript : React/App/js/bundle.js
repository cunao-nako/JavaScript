/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((module) => {

// Calculator

function calculator() {
  let calculator = document.querySelector('.calculating'),
  genders = calculator.querySelector('#gender').querySelectorAll('.calculating__choose-item'),
  currentGender = calculator.querySelector('#gender').querySelector('.calculating__choose-item_active'),
  height = calculator.querySelector('#height'),
  weight = calculator.querySelector('#weight'),
  age = calculator.querySelector('#age'),
  activity = calculator.querySelector('.calculating__choose_big').querySelectorAll('.calculating__choose-item'),
  currentActivity = calculator.querySelector('.calculating__choose_big').querySelector('.calculating__choose-item_active'),
  activityScale = {
    low: 1.2,
    small: 1.375,
    medium: 1.55,
    high: 1.725,
  },
  local,
  checker = true,
  activityScaleValue = activityScale[currentActivity.getAttribute('id')],
  result = calculator.querySelector('.calculating__result').querySelector('span');

  calculateBMR();

  genders.forEach(input => {
    input.addEventListener('click', event => {
      if (event.target !== currentGender) {
        toggleCurrentChosen(event.target, currentGender);
        currentGender = event.target;
        calculateBMR();
      }
    });
  });

  activity.forEach(input => {
    input.addEventListener('click', event => {
      if (event.target !== currentActivity) {
        toggleCurrentChosen(event.target, currentActivity);
        currentActivity = event.target;
        calculateBMR();
      }
    });
  });

  height.addEventListener('input', event => checkInput(event.target));
  weight.addEventListener('input', event => checkInput(event.target));
  age.addEventListener('input', event => checkInput(event.target));

  function toggleCurrentChosen(target, current) {
    target.classList.add('calculating__choose-item_active');
    current.classList.remove('calculating__choose-item_active');
  }

  function checkInput(target) {
    let text = target.value;

    if (isNaN(text) || /\s/g.test(text) || (+text <= 0 && text.length > 0)) {
      target.style.border = '1px solid #c44569';
      target.style.color = '#c44569';
      // feedBack('Неккоректный ввод!');
    } else {
      target.removeAttribute('style');
      closeModalWindow();
      calculateBMR();
    }
  }

  function calculateBMR() {
    if (localStorage.getItem('bmr') && checker) { setLocal(); }
    activityScaleValue = activityScale[currentActivity.getAttribute('id')];
    if (currentGender.innerText === 'Мужчина') {
      checkFinal(`${((88.36 + (13.4 * weight.value) + (4.8 * height.value) - (5.7 * age.value)) * activityScaleValue).toFixed(0)}`);
    } else {
      checkFinal(`${((447.6 + (9.2 * weight.value) + (3.1 * height.value) - (4.3 * age.value)) * activityScaleValue).toFixed(0)}`);
    }
    local = {
      gender: currentGender.innerText,
      height: height.value,
      weight: weight.value,
      age: age.value,
      scale: activityScaleValue,
    };
    localStorage.setItem('bmr', JSON.stringify(local));

    function checkFinal(final) {
      if (final > 0) {
        result.innerText = final + 'ккал';
        result.removeAttribute('style');
      }
      else {
        result.style.fontSize = '13px';
        result.style.color = '#c44569';
        result.innerText = 'Пожалуйста введите все значения!';
      }
    }
  }

  function setLocal() {
    local = JSON.parse(localStorage.getItem('bmr'));
    genders.forEach(gender => {
      if (gender.innerText === local.gender && currentGender !== gender) {
        toggleCurrentChosen(gender, currentGender);
        currentGender = gender;
      }
    });
    height.value = local.height;
    weight.value = local.weight;
    age.value = local.age;
    activity.forEach(item => {
      if (activityScale[item.getAttribute('id')] === local.scale && currentActivity !== item) {
        toggleCurrentChosen(item, currentActivity);
        currentActivity = item;
      }
    });
    checker = false;
  }
}

module.exports = calculator;

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function form() {
  
  const modal = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");

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

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((module) => {

function menu() {
  const getData = async url => {
    let result = await fetch(url);
    if (result.ok) {return await result.json(); }
    else { throw new Error(`Fatal fetch ${url} with status: ${result.status}`); }
  };

  class MenuItem {
    constructor (src, alt, title, text, cost, parent, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.cost = this.convert(cost);
      this.parent = document.querySelector(parent);
      this.classes = classes;
    }

    convert(cost) { return cost * 27; }

    render() {
      let element = document.createElement('div');
      if (this.classes.length) { this.classes.forEach( className => element.classList.add(className) ); }
      else { element.classList.add('menu__item'); }
      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.text}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.cost}</span>грн/день</div>
        </div>`;
      this.parent.append(element);
    }
  }

  getData('http://localhost:3000/menu').then(result => {
    result.forEach(({img, altimg, title, descr, price}) => {
      new MenuItem(img, altimg, title, descr, price, '.menu .menu__field .container').render(); });
  });
}

module.exports = menu;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Modal windows
function modal() {

  const form = __webpack_require__(/*! ./form */ "./js/modules/form.js");

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

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

// Slider v0.2 & Slider Dots
function slider() {
  let fullWindow = document.querySelector('.offer__slider-wrapper'),
  sliderWindow = fullWindow.querySelector('.offer__slider-inner'),
  slides = fullWindow.querySelectorAll('.offer__slide'),
  previous = document.querySelector('.offer__slider-prev'),
  next = document.querySelector('.offer__slider-next'),
  currentSlide = document.querySelector('#current'),
  totalSlides = document.querySelector('#total'),
  wholeSlider = document.querySelector('.offer__slider'),
  dotsWrapper = document.createElement('ol'),
  width = window.getComputedStyle(fullWindow).width,
  currentSlideCounter = 1,
  offsetCounter = 0,
  currentSliderDot,
  checkCurrentSlide = () => {
    if (currentSlideCounter < 10) { return `0${currentSlideCounter}`; }
    else { return `${currentSlideCounter}`; }
  };

  dotsWrapper.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`;
  wholeSlider.append(dotsWrapper);

  slides.forEach((item, number) => {
    let dot = document.createElement('li');
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 10px;
      margin-right: 3px;
      margin-left: 3px;
      margin-bottom: 5px;
      cursor: pointer;
      background-color: #0be881;
      background-clip: padding-box;
      border: 1px solid black;
      border-radius = 100px;
      opacity: .3;
      transition: all .7s;`;
    dot.setAttribute('data-slide-no', `${number}`);
    dotsWrapper.append(dot);

    dot.addEventListener('mouseenter', () => {
      dot.style.backgroundColor = '#05c46b';
      dot.style.opacity = '1';
      setActiveSliderDot();
    });

    dot.addEventListener('mouseleave', () => {
      dot.style.backgroundColor = '#0be881';
      dot.style.opacity = '.5';
      setActiveSliderDot();
    });

    dot.addEventListener('click', (event) => {
      let dotCounter = +event.target.getAttribute('data-slide-no');
      currentSlideCounter = dotCounter + 1;
      offsetCounter = parseInt(width) * (currentSlideCounter - 1);
      sliderWindow.style.transform = `translateX(-${offsetCounter}px)`;
      setActiveSliderDot();
      currentSlide.textContent = checkCurrentSlide();
    });
  });
  setActiveSliderDot();

  if (slides.length < 10) { totalSlides.textContent = `0${slides.length}`; }

  slides.forEach(slide => { slide.style.width = width; });

  sliderWindow.style.cssText = `
    display: flex;
    flex-direction: row;
    width: ${parseInt(width) * slides.length}px;
    transition: all 0.7s;
    overflow: hidden`;

  next.addEventListener('click', () => {
    if (currentSlideCounter === slides.length) {
      currentSlideCounter = 1;
      offsetCounter = 0;
    } else {
        currentSlideCounter++;
        offsetCounter += parseInt(width);
    }
    dotsWrapper.querySelectorAll('.dot').forEach(dot => {
      if (dot.getAttribute('[data-slide-no]') === currentSlideCounter - 1) {
        dot.style.opacity = '1';
        dot.style.backgroundColor = '#05c46b';
      }
    });
    setActiveSliderDot();
    sliderWindow.style.transform = `translateX(-${offsetCounter}px)`;
    currentSlide.textContent = checkCurrentSlide();
  });

  previous.addEventListener('click', () => {
    if (currentSlideCounter === 1) {
      currentSlideCounter = slides.length;
      offsetCounter = parseInt(width) * (slides.length - 1);
    } else {
      currentSlideCounter--;
      offsetCounter -= parseInt(width);
    }
    sliderWindow.style.transform = `translateX(-${offsetCounter}px)`;
    setActiveSliderDot();
    currentSlide.textContent = checkCurrentSlide();
  });

  function setActiveSliderDot() {
    let dots = document.querySelectorAll(`[data-slide-no]`);
    dots.forEach(dot => {
      if ( +dot.getAttribute('data-slide-no') === currentSlideCounter - 1) {
        changeActiveSliderDot(dot);
        currentSliderDot = dot;
        currentSliderDot.style.backgroundColor = '#05c46b';
        currentSliderDot.style.opacity = '1';
        currentSliderDot.style.border = '1px solid white';
      }
    });
  }

  function changeActiveSliderDot(dot) {
    if (currentSliderDot) {
      currentSliderDot.style.backgroundColor = '#0be881';
      currentSliderDot.style.opacity = '0.3';
      currentSliderDot.style.border = '1px solid black';
    }
    currentSliderDot = dot;
    currentSliderDot.style.backgroundColor = '#05c46b';
    currentSliderDot.style.opacity = '1';
    currentSliderDot.style.border = '1px solid white';
  }
}

module.exports = slider;

// Slider v0.1
// let offerImgs = document.querySelectorAll('.offer__slide'),
//     arrayOfImg = [],
//     indicatorCurrent = document.querySelector('#current'),
//     indicatorTotal = document.querySelector('#total'),
//     next = document.querySelector('[data-next]'),
//     prev = document.querySelector('[data-prev]'),
//     currentImg,
//     arrayOfCanceling = [],
//     interval;
//
// hideOfferImg();
// runAutoSlidingImg();
//
// next.addEventListener('click', () => {
//   currentImg.style.display = 'none';
//   let indexNextImg = arrayOfImg.indexOf(currentImg) + 1;
//   if (indexNextImg > arrayOfImg.length - 1) {
//     indexNextImg = 0;
//   }
//   currentImg = arrayOfImg[indexNextImg];
//   currentImg.style.display = 'inline';
//   if (indexNextImg < 10) {
//     indicatorCurrent.innerText = `0${indexNextImg + 1}`;
//   } else { indicatorCurrent.innerText = `${indexNextImg + 1}`; }
//   clearInterval(interval);
//   arrayOfCanceling.forEach(item => clearInterval(item));
//   let newAutoSliding = setTimeout(runAutoSlidingImg, 3500);
//   arrayOfCanceling.push(newAutoSliding);
//
// });
//
// prev.addEventListener('click', () => {
//   currentImg.style.display = 'none';
//   let indexNextImg = arrayOfImg.indexOf(currentImg) - 1;
//   if (indexNextImg < 0) { indexNextImg = arrayOfImg.length - 1; }
//   currentImg = arrayOfImg[indexNextImg];
//   currentImg.style.display = 'inline';
//   if (indexNextImg < 10) {
//     indicatorCurrent.innerText = `0${indexNextImg + 1}`;
//   } else { indicatorCurrent.innerText = `${indexNextImg + 1}`; }
//   clearInterval(interval);
//   arrayOfCanceling.forEach(item => {
//     clearInterval(item);
//   });
//   let newAutoSliding = setTimeout(runAutoSlidingImg, 3500);
//   arrayOfCanceling.push(newAutoSliding);
// });
//
// function hideOfferImg() {
//   indicatorCurrent.innerText = '01';
//   indicatorTotal = offerImgs.length;
//   offerImgs.forEach(img => {
//     if (img === offerImgs[0]) {
//       img.style.display = 'inline';
//       currentImg = img;
//       arrayOfImg.push(img);
//     }
//     else {
//       img.style.display = 'none';
//       arrayOfImg.push(img);
//     }
//   });
// }
//
// function autoSlideImg() {
//   currentImg.style.display = 'none';
//   let indexNextImg = arrayOfImg.indexOf(currentImg) + 1;
//   if (indexNextImg > arrayOfImg.length - 1) { indexNextImg = 0; }
//   currentImg = arrayOfImg[indexNextImg];
//   currentImg.style.display = 'inline';
//   indicatorCurrent.innerText = `0${indexNextImg + 1}`;
// }
//
// function runAutoSlidingImg() {
//   interval = setInterval(autoSlideImg, 2500);
// }

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

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

  function contentTimer() {
  contentTimerValue = setInterval(autoSlide, 3000);
  }
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

// Special Offer Timer

function timer() {
  let specialFinishDate = new Date(2021, 4, 15),
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
}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
  const calculator = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js"),
        form = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js"),
        menu = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
        tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
  
  calculator();
  form();
  menu();
  modal();
  slider();
  tabs();
  timer();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map