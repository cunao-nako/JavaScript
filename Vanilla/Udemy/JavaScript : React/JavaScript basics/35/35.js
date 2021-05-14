let h1 = document.querySelector('h1'),
    p = document.querySelector('p');

h1.innerText = 'Привет';
p.innerText = 'мир!';

let script = document.createElement('script');
script.src = 'test.js';
script.async = false;
document.body.append(script);