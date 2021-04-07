let firstUser = {
    role: 'admin',
    firstName: 'Jhon',
    secondName: 'Smith',
    address: {},
    isOnline: false,
    doLogin () {
        this.isOnline = true;
        console.log(`${this.firstName} успешно вошёл!`);
    }
};

let secondUser = {
    role: 'guess',
}

// ?. возвращает undefined вместо ошибки, если свойчтва не существует
console.log(`firstUser.address.street = ${firstUser.address?.street}`);

// так же может использоваться для безопасного вызова методов
firstUser.doLogin?.()
firstUser.doLogout?.()

// может использоваться для "безопасного" удаления
delete firstUser?.email;

