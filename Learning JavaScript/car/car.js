let car = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium blue',
    passengers: 2,
    fuel: 0,
    engineStarted: false,
    driving: false,
    addFuel: function(amount) {
        this.fuel += amount;
    },
    startEngine: function() {
        if (this.fuel) {
            this.engineStarted = true;
            console.log('Engine started!');
        } else {
            console.log('The car is on empty, fill up before starting!');
        }
    },
    drive: function() {
        if (this.engineStarted) {
            this.driving = true;
            while (this.fuel) {
                console.log('Driving...');
                if (this.fuel <= 10) {
                    console.log('Low amount of fuel = ' + this.fuel + '.')
                }
                this.fuel -= 1;
            }
            this.driving = false;
            console.log('To continue driving, add more fuel!')
        } else {
            console.log('To start driving, you need to start the engine.');
        }
    },
    stop: function() {
        if (this.driving) {
            console.log('Stoped...');
        } else {
            console.log('Car is already stoped!')
        }
    },
    stopEngine: function() {
        if (this.engineStarted) {
            this.engineStarted = false;
            console.log('Engine stoped!');
        } else {
            console.log('Engine is already stoped!');
        }
    }
}

car.addFuel(100)
car.startEngine();
car.drive();