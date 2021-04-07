// function foo (text) { // инициализируется при компиляции кода
//     alert("hi it's foo " + text);
// }
//
// let myFunction = function (text) { // инициализируется только когда поток доходит до её объявления
//     alert("hi it's myFunction " + text);
// };
//
// let newVariableForfoo = foo;
// let newVariableFormyFunction = myFunction; // функции являются значениями, по этому могут присваиваться другим переменным
// newVariableFormyFunction('test');
// newVariableForfoo('test');

// call-back functions
function showQuestion(question, yes, no) {
    return (confirm(question)) ? yes() : no();
}

function showYes() {
    console.log('yes');
}

function showNo() {
    console.log('no');
}

let question = prompt('Ask a yes-no question:', '');
showQuestion(question, showYes, showNo);