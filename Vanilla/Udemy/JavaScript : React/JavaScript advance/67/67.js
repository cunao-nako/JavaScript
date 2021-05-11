// акцессоры
const user = {
  name: 'Jhon',
  surname: 'Smith',
  age: 25,
  get userData() { return this.name + ' ' + this.surname + ', ' + this.age + ' age old.'; },
  set userData(data) { this.name = data.name; this.surname = data.surname; this.age = data.age; },
},
data = {
  name: 'Alex',
  surname: 'Miller',
  age: 35,
}

user.userData = data;
console.log(user.userData);