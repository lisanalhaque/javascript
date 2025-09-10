// Using the spread operator to pass array elements as individual arguments to a function
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { ...obj1, };
console.log(obj2); // Output: { name: 'Alice', age: 25 }