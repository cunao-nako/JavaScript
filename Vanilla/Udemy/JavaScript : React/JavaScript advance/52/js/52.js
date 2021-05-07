document.body.style.background = 'darkgrey';
let inputRUB = document.querySelector('#rub'),
    inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'dataFiles/currentCurrency.json');
  request.setRequestHeader('Content-type', 'application/JSON; charset=utf-8');
  request.send();
  request.addEventListener('load', () => {
    if (request.status === 200) {
      let value = (inputRUB.value / JSON.parse(request.response).currency.usdToRub).toFixed(3);
      if (!isNaN(value)) { inputUSD.value = value; }
      else { inputUSD.value = 'Incorrect input!'; }
    } else { inputUSD.value = 'Something went wrong :('; }
  });
});
