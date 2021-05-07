// // сиволы гарантировано уникальны, даже если у них идентичное описание
// let a = Symbol('a');
// let someLetter = Symbol('a');
//
// console.log(a == someLetter); // => false
//
// // alert(a); // Uncaught TypeError: Cannot convert a Symbol value to a string
//
// // если мы хотим вывести символ, нужно явно преобразовать его в строку методом .toString()
// alert(a.toString()); // => Symbol(a)
//
// // если мы хотим вывести только описание символа, то можно воспользоваться свойством .description
// alert(a.description); // => a

// // символы можно использовать как "скрытые" свойства объектов
// // благодаря символам можно создать безопасное свойство объекта к которому нельзя будет случайно обраться/перезаписать
// let user = {
//     login: 'login',
//     password: 'password',
//     adress: {},
// }
//
// let id = Symbol('id');
// user[id] = 1;
// // мы можем получать доступ к записанным данным по ключу
// console.log(user[id]); // => 1

// let id = Symbol('id');
//
// let user = {
//     [id]: 1,
//     firstName: 'Jhon',
//     secondName: 'Smith',
//     isAdmin: false,
// }
//
// for (let key in user) {
//     console.log(key); // => firstName\n secondName\n isAdmin
//     // если ключ - символ, он не переберётся циклом!
// }
//
// // но по прямому запросу данные получить можно
// console.log(user[id]); // => 1
// console.log(user); // => {firstName: "Jhon", secondName: "Smith", isAdmin: false, Symbol(id): 1}
//
// // при копировании свойств методом Object.assign() скопируются ВСЕ свойства
// let cloneUser = Object.assign({}, user);
// console.log(cloneUser); // => {firstName: "Jhon", secondName: "Smith", isAdmin: false, Symbol(id): 1}

// // создание символов в глобальном реестре символов и последующее к ним обращение
// let mySymbol = Symbol.for('id');
//
// let myNewSymbol = Symbol.for('id');
//
// console.log(mySymbol == myNewSymbol); // => true

// // получение (или создание) имён символов из глобального реестра c помощью метода .keyFor()
// let symbol = Symbol.for('id1');
// let newSymbol = Symbol.for('id2');
// let myNonGlobalSymbol = Symbol('id3')
//
// console.log(Symbol.keyFor(symbol)); // => id1
// console.log(Symbol.keyFor(newSymbol)); // => id2
//
// // т.к метод .keyFor() работает с глобальным реестром символов, если символ "локальный" метод вернёт undefined
// console.log(Symbol.keyFor(myNonGlobalSymbol)); // => undefined