let button = document.querySelector('.btn'),
    stopButton = document.querySelector('.stop'),
    element = document.querySelector('.box'),
    counter = 0,
    side = 1,
    animationInterval,
    animationBuffer = [];

stopButton.addEventListener('click', () => {
  animationBuffer.forEach(item => clearInterval(item));
});

button.addEventListener('click', () => {
  animationBuffer.forEach(item => clearInterval(item));
  animationInterval = setInterval(animation, 4);
  animationBuffer.push(animationInterval);
});

function animation() {
  if(counter <= 300 && side === 1) {
    element.style.top = counter + 'px';
    element.style.bottom = counter + 'px';
    counter++;
  }
  if (counter === 300 && side === 1) {
    side++;
    counter = 0;
  }
  if (counter <= 300 && side === 2) {
    element.style.bottom = counter + 'px';
    element.style.left = counter + 'px';
    counter++;
  }
  if (counter === 300 && side === 2) {
    side++;
    counter = 300;
  }
  if (counter >= 0 && side === 3) {
    element.style.top = counter + 'px';
    element.style.bottom = counter + 'px';
    counter--;
  }
  if (counter === 0 && side === 3) {
    side++;
    counter = 300;
  }
  if (counter >= 0 && side === 4) {
    element.style.top = '0px';
    element.style.left = counter + 'px';
    counter--;
  }
  if (counter === 0 && side === 4) { side = 1; }
}