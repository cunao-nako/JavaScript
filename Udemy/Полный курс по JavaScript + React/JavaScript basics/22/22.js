// Передача по ссылке и по значению

// // передача ссылки на объект
// let object = {
//   a: 5,
//   b: 2,
// };
//
// let objectCopy = object;
//
// objectCopy.a = 10;
//
// console.log(object);
// console.log(objectCopy);

// // поверхностное клонирование объекта с помощию цикла for ... in ...
// let numbers = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: {
//     e: 4,
//     f: 5,
//   },
// };
//
// let numbersNew = copyObj(numbers);
// numbersNew.a = 2;
// numbersNew.d.e = 14;
// console.log('numbers:', numbers);
// console.log('numbersNew:', numbersNew);
//
// function copyObj(mainObj) {
//   let newObj = {};
//   for (let key in mainObj) { newObj[key] = mainObj[key]; }
//   return newObj;
// }

// // поверхностное клонирование объекта с помощью Object.assign()
// let numbers = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: {
//     e: 4,
//     f: 5,
//   },
// };
//
// let anotherNumbers = {
//   g: 6,
//   k: 7,
// };
//
// Object.assign(numbers, anotherNumbers); // "слепление" двух объектов в новый
//
// let numbersNew = Object.assign({}, numbers);
// numbersNew.a = 10;
// console.log('numbers:', numbers);
// console.log('numbersNew:', numbersNew);

// // метод .slice() - позволяет поверхностно клонировать массив
// let oldArray = ['a', 'b', 'c', 'd', 'e', 'f'];
// let newArray = oldArray.slice();
// newArray[0] = '1';
// console.log('oldArray:', oldArray);
// console.log('newArray:', newArray);

// // оператор разворота "..." - так же позволяет делать поверхностные копии массивов
// let video = ['youtude', 'tiktok', 'rutube'],
//     blogs = ['livejournal', 'tumbler', 'wordpresss'],
//     internet = [...video, ...blogs, 'vk', 'instagram', 'facebook'];
// console.log(internet);
//
// let oldArray = ['a', 'b'];
// let newArray = [...oldArray];
// newArray[0] = 'c';
// console.log("oldArray:", oldArray);
// console.log("newArray:", newArray);

// // оператор разворота '...' - позволяет расскладывать структуры на отдельные элементы
// let myInformation = ['a', 'b', 'c'];
// logging(...myInformation);
//
// function logging(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// // использование оператора разворота '...' для создания поверхнотсной копии объекта
// let oldObj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
//
// let newObj = {...oldObj};
// newObj.a = 5;
//
// console.log('oldObg:', oldObj);
// console.log('newObj:', newObj);
