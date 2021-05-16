const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');

let pos = 0;

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

function myAnimation() {
  pos++;
  elem.style.top = pos + "px";
  elem.style.left = pos + 'px';

  if (pos < 150) { requestAnimationFrame(myAnimation); }
  else { cancelAnimationFrame(requestAnimationFrame(myAnimation)); }
}

