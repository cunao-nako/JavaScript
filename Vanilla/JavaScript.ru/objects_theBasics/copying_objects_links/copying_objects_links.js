let myObject = {
    userName: 'Jhon',
}
let newMyObject = myObject;  // копирование ссылок на объект, а не значений.
myObject.userName = 'Jhin';  // Изменение объекта:
console.log(newMyObject);  // Изменение во всех копиях.

// объекты равны если это один и тот же объект
console.log(`myObject = newMyObject: ${myObject == newMyObject}`);

// для объектов '===' работает так же как и '=='
console.log(`myObject = newMyObject: ${myObject === newMyObject}`);

// клонирование объекта с использованием for in loop
let copyMyObject1 = {};

for (let key in myObject) {
    copyMyObject1[key] = myObject[key];
}
console.log('copyMyObject1:', copyMyObject1)

// клонирование объекта с помощью Object.assign (НЕ делает "глубокое" копирование)
let copyMyObject2 = Object.assign({}, myObject);
console.log('copyMyObject2:', copyMyObject2);

// вложенное клонирование (если параментр объекта тоже является объектов)
let user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};

let userClone = {};

for (let key in user) {
    if (typeof user[key] == 'object') userClone[key] = Object.assign({}, user[key]);
    else userClone[key] = user[key];
}