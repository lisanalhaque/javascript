// Program to check if a string is a palindrome

let str = "madam"; // You can change this string to test
let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
  console.log(str + " is a palindrome.");
} else {
  console.log(str + " is not a palindrome.");
}
