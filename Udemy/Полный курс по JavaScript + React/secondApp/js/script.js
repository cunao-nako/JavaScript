let tabHeader = document.querySelectorAll('.tabheader__item'),
    currentActive = document.querySelector('.tabheader__item_active');

let context = {
  'Фитнес': {
    'img': {
      'src': 'img/tabs/vegy.jpg',
      'alt': 'vegy',
    },
    'description': 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. '+
                   'Для людей, которые интересуются спортом; активных и здоровых. '+
                   'Это абсолютно новый продукт с оптимальной ценой и высоким качеством!\n',
  },
  'Премиум': {
    'img': {
      'src': "img/tabs/elite.jpg",
      'alt': "elite",
    },
    'description': 'Меню “Премиум” - мы используем не только красивый дизайн упаковки, '+
                   'но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - '+
                   'ресторанное меню без похода в ресторан!\n',
  },
  'Постное': {
    'img': {
      'src': "img/tabs/post.jpg",
      'alt': "post",
    },
    'description': 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов '+
                   'животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!\n',


  },
  'Сбалансированное': {
    'img': {
      'src': "img/tabs/vegy.jpg",
      'alt': "vegy",
    },
    'description': 'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. '+
                   'Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.\n',
  },
};

tabHeader.forEach(item => {
  item.addEventListener('click', event => {
    if (event.target !== currentActive) {
      let menu = event.target.innerText,
          tabcontent = document.querySelector('.tabcontent'),
          img = tabcontent.querySelector('img'),
          text = tabcontent.querySelector('.tabcontent__descr');
      img.src = context[menu].img.src;
      img.alt = context[menu].img.alt;
      text.innerHTML = context[menu].description;
      currentActive.classList.toggle('tabheader__item_active');
      event.target.classList.toggle('tabheader__item_active');
      currentActive = event.target;
    }
  });
});


