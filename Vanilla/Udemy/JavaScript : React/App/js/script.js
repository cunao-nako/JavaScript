import calculator from './modules/calculator';
import form from './modules/form';
import menu from './modules/menu';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
  calculator();
  form();
  menu();
  modal();
  slider();
  tabs();
  timer();
});