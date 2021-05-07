// Массивы
// Псевдомассивы - точная копия массивов, за одним исключением полного отсутвия всех методов и свойств обычных массивов

// // метод .pop() - удаляет последений элемент в массиве и возвращает его
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let lastElementInMyArray = myArray.pop();
//
// console.log(`myArray: ${myArray}`);
// console.log(`lastElementInMyArray: ${lastElementInMyArray}`);

// // метод .push() - добавляет элемент в конец массива
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArray.push(5);
// console.log(`myArray: ${myArray}`);

// // перебор массива с помощью конструкции for ... of ...
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let item of myArray) {
//     console.log(item);
// }

// // метод .forEach() - для перебора массива
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArray.forEach((item, index, array) => {
//   console.log(`Элемент массива ${array}, №${index}: ${item} * 2 = ${item * 2}`);
// });

// // метод .split() - разбивка строки в массив
// let string = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15';
// let myArray = string.split(', ');
// console.log(myArray);

// // метод .join() - конкатенация массива в строку
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let string = myArray.join(', ');
// console.log(string);

// // метод .sort() - сортировка массива
// let myArray = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];
// myArray.sort();
// console.log(myArray); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] - массив отсортирован как строка
// myArray.sort(compareNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - массив отсортирован как числа
// console.log(myArray);
//
// function compareNumbers(a, b) {
//   return a - b;
// }
