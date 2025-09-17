const students = [
    { name: 'abi', age: 20, grade: 'A' },
    { name: 'lisan', age: 22, grade: 'B' },
    { name: 'haque', age: 21, grade: 'B+' }
];
//accessing data
console.log(students[0].name); // Output: abi
console.log(students[1].grade);  // Output: B

//looping through object array
students.forEach(stdnt => {
    console.log(`${stdnt.name} is ${stdnt.age} years old`);
});