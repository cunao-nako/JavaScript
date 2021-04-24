let buttonsRow = document.querySelector('.btn-block');

buttonsRow.addEventListener('click', event => {
    if (event.target && event.target.matches('button')) {
      let buttonsColor = event.target.classList;
      if ( buttonsColor.contains('blue') ) {
        buttonsColor.toggle('blue');
        buttonsColor.toggle('red');
      } else if ( buttonsColor.contains('red') ) {
        buttonsColor.toggle('red');
      }
      else { buttonsColor.add('blue'); }
      }
});

for (let i = 0; i < 4; i++) {
  buttonsRow.append(document.createElement('button'));
}
