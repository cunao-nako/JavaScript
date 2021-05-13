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

export default slider;

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