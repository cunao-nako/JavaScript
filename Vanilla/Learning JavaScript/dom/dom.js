function init() {
    var message = document.getElementById("greenplanet");
    if (message) {
        message.innerHTML = "Red Alert: hit by phaser fire!";
        message.setAttribute("class", "redtext");
    } else {
        console.log('Элемент не найден')
    }
    var attribute = document.getElementById('blueplanet').getAttribute('style');
    if (attribute) {
        console.log(attribute)
    } else {
        console.log('Атрибут не найден')
    }
}
window.onload = init;