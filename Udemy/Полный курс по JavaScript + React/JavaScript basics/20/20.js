// Object
let options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        background: 'red',
    },
    // getSize: function () {
    //     return `${this.width} x ${this.height}`;
    // },
};

// console.log(options.getSize());

// // вложенный перебор свойств массива
// for (let key in options) {
//     if (typeof(options[key]) == 'object') {
//         for (let internalKey in options[key]) {
//             console.log(`${key}: ${internalKey} = ${options[key][internalKey]}`);
//         }
//     } else { console.log(`${key} = ${options[key]}`); }
// }

// // Object.keys() создает массив состоящий из ключей переданного этому методу массива в качестве аргумента
// console.log(Object.keys(options).length);

// // Деструктуризация объекта
// let {border, background} = options.colors;
// console.log(border);
// console.log(background);

