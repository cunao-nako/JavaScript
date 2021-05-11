// инкапсуляция в функции-конструкторе
// function User(name, surname) {
//   let userName = name,
//     userSurname = surname;

//   this.say = text => text +', with pleasure, ' + userName + ' ' + userSurname;

//   this.getName  = () => { return userName; };
//   this.setName = (name) => {
//     if (isNaN(name)) { userName = name; }
//     else { console.log('Inncorect name!'); }
//   };
// }

// let user1 = new User('Alex', 'Miller');
// console.log(user1.say('hi'));


// user1.userName = 'J';
// user1.setName('Jhon');
// console.log(user1.say('hi'));

// инкапсуляция в классеx
class User {
  constructor(name, surname) {
    this.name = name;
    this._surname = surname;
  }

  say() {
    console.log(`Имя: ${this.name}; Фамилия: ${this._surname};`);
  }

  get surname() { return this._surname; }
  set surname(surname) { this._surname = surname; }
}

let ivan = new User('Ivan', 'Ivanov');
ivan.say();

console.log(ivan.surname);
ivan.say();