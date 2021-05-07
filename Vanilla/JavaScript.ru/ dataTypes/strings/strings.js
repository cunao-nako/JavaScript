document.body.style.background = 'black';
// // first exercise
// function ucFirst(name) {
//   if (name) { return name[0].toUpperCase() + name.slice(1); }
//   else { return name; }
// }
//
// console.log(ucFirst('лиза'));

// // second exercise
// function checkSpam(str) {
//   if (str) {
//     return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra');
//   } else { return str; }
// }
//
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// // third exercise
// function truncate(str, maxlength) {
//   if (str.length > maxlength) { return str.slice(0, maxlength) + '...'; }
//   else { return str; }
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

// // forth exercise
function extractCurrencyValue(cost) {
  let result = '';
  if (cost) {
    for (let symbol of cost) {
      if (symbol === '.') { result += symbol}
      else if (!isNaN(symbol)) { result += symbol; }
    }
    return +result;
  } else { return cost; }
}

console.log(extractCurrencyValue('$120')); // 120
console.log(extractCurrencyValue('130$')); // 120
console.log(extractCurrencyValue('140¢')); // 120
console.log(extractCurrencyValue('15₽.01k')); // 120
console.log(extractCurrencyValue('')); // 120
