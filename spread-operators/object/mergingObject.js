// Using the spread operator to merge two objects
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { location: 'Wonderland' };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { name: 'Alice', age: 25, location: 'Wonderland' }
