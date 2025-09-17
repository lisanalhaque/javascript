class Vehicle {
    constructor(name, model) {
        this.name = name;
        this.model = model;

    }
    travels() {
        console.log(`the Car is ${this.name} , the model is ${this.model} .`);

    }
}

class Volkswagen extends Vehicle {
    constructor(name, color) {
        super(name, color);
        this.color = color;

    }
    travels() {
        console.log(`the Car is ${this.name} , the color is ${this.color} .`);

    }
}

const volkswagen = new Volkswagen("vento", "Blue");
volkswagen.travels();