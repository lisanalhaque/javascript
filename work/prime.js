// Program to check if a number is prime or not

let num = 7; // You can change this number to test

let isPrime = true;

if (num <= 1) {
  isPrime = false; // 0 and 1 are not prime numbers
} else {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}
