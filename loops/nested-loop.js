// loop through a block of code a specified number of times
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*" ;
  }
  console.log(row);
}