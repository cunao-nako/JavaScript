// OOP

let solder = {
  isAlive: true,
  health: 500,
  armor: 300,
  dps: 200,
  die: function () {
    this.health = 0;
    this.isAlive = false;
  },
};

// // устаревшее наследование;
// jhon.__proto__ = solder;

let jhon = Object.create(solder); // инициализация объекта класса solder

let bob = { health: 100, };

Object.setPrototypeOf(bob, solder); // присваивание уже существующего объекта к solder, с сохранением его особенностей

