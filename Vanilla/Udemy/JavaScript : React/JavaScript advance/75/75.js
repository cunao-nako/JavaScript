// try {
//   // console.log('normal');
//   // throw new Error('error');
//   console.log(a);
// } catch(error) {
//   console.log('error.name:', error.name);
//   console.log('error.message:', error.message);
//   console.log('error.stack:', error.stack);
// }

// console.log('next code');

const button = document.querySelector('button');

let isClicked = false;

try {
button.addEventListener('click', event => {
    if (!isClicked) { event.target.style.backgroundColor = 'lightgreen'; }
    else { event.target.style.backgroundColor = ''; }
    isClicked = !isClicked;
  });
} catch(error) { console.log('no button to listen'); }

console.log('end of script');