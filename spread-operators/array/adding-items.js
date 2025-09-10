// Using the spread operator to add items to an array
const fruits = [, 'banana', 'orange'];
const moreFruits = ['mango',...fruits, 'grape', 'pineapple'];
console.log(moreFruits); // Output: ['apple', 'banana', 'orange', 'mango', 'grape', 'pineapple']