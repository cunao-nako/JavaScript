window.addEventListener('DOMContentLoaded', () => {
  const calculator = require('./modules/calculator'),
        form = require('./modules/form'),
        menu = require('./modules/menu'),
        modal = require('./modules/modal'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        timer = require('./modules/timer');
  
  calculator();
  form();
  menu();
  modal();
  slider();
  tabs();
  timer();
});