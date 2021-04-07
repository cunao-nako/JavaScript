let variable = false;
console.log(variable, "dataType = " + typeof variable);

// conversion boolean to string
variable = String(variable);
console.log(variable, `dataType = ${typeof variable}`);

// conversion string to number
let string = prompt('Введите число', '');
console.log(string, `dataType = ${typeof string}`);

string = Number(string);
console.log(string, `dataType = ${typeof string}`);