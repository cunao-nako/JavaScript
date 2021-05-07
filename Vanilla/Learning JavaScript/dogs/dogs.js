function bark(name, weight) {
    says = name + ' ' + 'says: '
    if (weight > 20) {
        says += 'WOOF WOOF'
    } else {
        says += 'woof woof'
    }
    alert(says)
}

bark('Bobby', 40)
bark("Rover", 23);
bark("Spot", 13);
bark("Spike", 53, 0);
bark("Lady", 17);
