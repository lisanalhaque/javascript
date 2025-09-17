// one class inherits properties and methods from another class
//base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // call the constructor of the base class
        this.breed = breed;
    }
// overriding the speak method (polymorphism)
    speak() {
        console.log(`${this.name} barks.`);
    }

}
const dog = new Dog('Rex', 'Rajapalayam');
dog.speak(); 