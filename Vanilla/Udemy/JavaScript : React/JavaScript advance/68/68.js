// инкапсуляция в функции-конструкторе
function User(name, surname) {
  let userName = name,
    userSurname = surname;

  this.say = text => text +', with pleasure, ' + userName + ' ' + userSurname;

  this.getName  = () => { return userName; };
  this.setName = (name) => {
    if (isNaN(name)) { userName = name; }
    else { console.log('Inncorect name!'); }
  };
}

let user1 = new User('Alex', 'Miller');
console.log(user1.say('hi'));


user1.userName = 'J';
user1.setName('Jhon');
console.log(user1.say('hi'));

// инкапсуляция в классе