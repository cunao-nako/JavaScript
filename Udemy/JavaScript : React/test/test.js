document.body.style.backgroundColor = 'orange';

let doctors = document.querySelectorAll('.doctor-container'),
    more = document.querySelector('.more');

doctors.forEach(item => {
  item.addEventListener('click', () => {
    console.log('click');
    more.querySelector('.content').innerText = item.querySelector('.box').innerText;
    more.classList.remove('hidden');
    more.classList.add('shown');
    console.log(more);
  });
});

more.addEventListener('click', event => {
  if (event.target !== more.querySelector('.content')) { closeMore(); }
});

let regBtn = document.querySelector('.reg'),
   registration = document.querySelector('.registration');

regBtn.addEventListener('click', () => {
  closeMore();
  registration.classList.remove('hidden');
  registration.classList.add('shown');
});

function closeMore () {
  more.classList.remove('shown');
  more.classList.add('hidden');
}