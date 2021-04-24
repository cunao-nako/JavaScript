// события в мобильных браузерах

let box = document.querySelector('.box');
box.addEventListener('touchstart', (event) => {
  event.preventDefault();
  console.log('Да сладкий!');
  console.log(event.targetTouches);
});
// box.addEventListener('touchmove', event => {
//   event.preventDefault();
//   console.log('Сладкий куда собрался?');
// });
// box.addEventListener('touchend', event => {
//   event.preventDefault();
//   console.log('Сладкий, потрогай ещё!');
// });