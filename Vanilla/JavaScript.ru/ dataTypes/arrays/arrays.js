// // first exercise
// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-Ролл');
// styles[Math.ceil((styles.length - 1)/ 2)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Реп', 'Регги');
// console.log(styles);

// // second exercise
// function sumInput() {
//   let numbers = [],
//       i,
//       result = 0;
//   do {
//     i = prompt('Enter number', '');
//     if (isNaN(i) || i === '' || i == null) { break; }
//     numbers.push(i);
//   } while (true)
//   numbers.forEach(item => {
//     result += +item;
//   })
//   return result
// }
//
// console.log(sumInput());

// // third exercise
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
function getMaxSubSum(arr) {
  let result = 0;
  arr.forEach(item => {

  });
  return result;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));  // = 5
console.log(getMaxSubSum([2, -1, 2, 3, -9]));   // = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));   // = 11
console.log(getMaxSubSum([-2, -1, 1, 2]));   // = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));  // = 100
console.log(getMaxSubSum([1, 2, 3]));   // = 6