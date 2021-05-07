// let person = {
//   name: 'Jhon',
//   surname: 'Smith',
// };

// // преобразование объекта к JSON формату
// let serverMessage = JSON.stringify(person);
// console.log('serverMessage:', serverMessage);
//
// // преобразование JSON формата к объекту
// let parseServerAnswer = JSON.parse(serverAnswer);
// console.log('parseServerAnswer', parseServerAnswer);

// // создание глубокой копии при помощи JSON
let person = {
  name: 'Jhon',
  surname: 'Smith',
  parents: {
    mother: {
      name: 'Alice',
      surname: 'Smith',
    },
    father: {
      name: 'Jameson',
      surname: 'Smith',
    },
  }
};

let deepCloned = JSON.parse(JSON.stringify(person));

deepCloned.parents.mother.name = 'Marge';
deepCloned.parents.father.name = 'Homer';

console.log('person:', person);
console.log('deepCloned:', deepCloned);