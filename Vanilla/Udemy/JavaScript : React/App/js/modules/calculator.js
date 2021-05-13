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