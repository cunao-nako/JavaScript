document.body.style.background = 'black';

function User(nickname, id) {
  this.name = nickname;
  this.id = id;
  this.onSite = true;
}

User.prototype.exit = function () {
  this.onSite = false;
  console.log(`User ${this.name} left.`);
};

let user1 = new User('777', 1);
let user2 = new User('666', 2);

console.log(user1);
user1.exit();
console.log(user1);