document.querySelector('body').setAttribute('style', 'background: black;')
// // метод Symbol.toPrimitive()
// let client = {
//     name: 'Jhon',
//     surname: 'Smith',
//     money: 1000,
//     currency: 'USD',
//     [Symbol.toPrimitive](hint) {
//         console.log(hint)
//         return hint == 'string' ? `Hello, ${this.name} ${this.surname}` : this.money;
//     }
// };
//
// alert(client);
// alert(+client);
// alert(client + 100);
// методы toString() и valueOf()
let client = {
    firstname: 'Alice',
    money: 4004,
    currency: 'EUR',
    toString() {
        return this.firstname;
    },
    valueOf() {
        return this.money;
    }
}

alert(client);
alert(+client);
alert(client + 100);