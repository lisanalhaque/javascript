// Program to swap two numbers without using a third variable

let a = 5;
let b = 10;

console.log("Before swapping: a =", a, ", b =", b);

// Swapping logic
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log("After swapping: a =", a, ", b =", b);
