//you can store functions in an object-these are called methods
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  start: function() {
    console.log('Car started');
  },
  stop: function() {
    console.log('Car stopped');
  }
};
car.start(); // Output: Car started
// car.stop();  // Output: Car stopped


//"this" keyword - refers the object itself.()
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet(); 
