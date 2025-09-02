// loop through a block of code at least once and then repeat as long as a specified condition is true
let i = 0;
do {
  console.log('no', i);
  console.log('hello');
  console.log(`This is message number ${i}`);
  i++;
} while (i < 3);
