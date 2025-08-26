// sort element of an array in ascending and descending order 
let num = [10,1,21,2];
num.sort();
console.log(num);

// numeric sort ascending order 
let numbers1 = [4,2,5,6,3,];
console.log(numbers1);

numbers1.sort((a,b) => a - b);
console.log('numbers in ascending order: ',numbers1);

// numeric sort descending order 
let numbers2 = [4,2,5,6,3,];
console.log(numbers2);

numbers2.sort((a,b) => b - a);
console.log('numbers in descending order: ',numbers2);


// default string sort (ascending) 
let fruits = ['banana','apple','dates','cherry'];
fruits.sort();
console.log(fruits);

let fruits1 = ['banana','apple','dates','cherry'];
fruits1.sort((a,b) => b.localeCompare(a));
console.log(fruits1);


