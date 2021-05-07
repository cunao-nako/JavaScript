// Callback-функции
function learnToCode(language, callbackFunction) {
    console.log(`Сейчас я учу ${language}`);
    callbackFunction();
}

function someFunction() {
    console.log('Привет, я callback-функция');
}

learnToCode('Javascript', someFunction);