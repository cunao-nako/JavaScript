let button = document.querySelector('.btn');
let timer;
button.addEventListener('click', () => {
  timer = setTimeout(logger, 20);
});

clearInterval(timer);

function logger() {
  console.log('Hi');
}