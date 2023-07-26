// arrow function টাকে একটা নামের মধ্যে রেখে
const add = (first, second) => first + second;
const getFullName = (first, second) => first + " " + second;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
console.log(result);

// parameter যদি বেশি হয়
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow functions. যদি প্যারামিটার না থাকে
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter ‍সিম্পল ভার্সন। যদি প্যারামিটার ১টা থাকে সেক্ষেত্রে ‍arrow function-এ () না দিলেও চলে
const fiveTimes = (num) => num * 2;

// multiline arrow function এর ক্ষেত্রে {} দিয়ে ফাংশনের কাজ করতে হয় এবং কাজ শেষে রিটার্ন করতে হয়। কিন্তু ‍single line simple arrow function -এ {} দেওয়া বা রিটার্ন করার কোনো প্রয়োজন পরে না।
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y - z;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
};

// 3 ways to write arrow function
/*
1. empty ()
const myName =() =>console.log('johon');

2. No () used
const square = a =>a*a;

3. () used
const add =(a,b) =>a+b
*/

// regular vs arrow functions difference
