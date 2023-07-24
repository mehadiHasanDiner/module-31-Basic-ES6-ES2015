// traditional system
function add(first, second) {
  // if (second === undefined) {
  //   second = 0;
  // }
  second = second || 0;
  const total = first + second;
  return total;
}

const result = add(10);
console.log(result);

// ডিফল্ট প্যারামিটার

// ES6 system (দ্বিতীয় প্যারামিটারের ডিফল্ট মান 0 ধরে)
function add(first, second = 0) {
  const total = first + second;
  return total;
}

const resultES6 = add(1);
console.log(resultES6);

// ES6 system (প্রথম ও  দ্বিতীয় দুইটা প্যারামিটারেরই ডিফল্ট মান 0 ধরে)
function add(first = 0, second = 0) {
  const total = first + second;
  return total;
}

const result2ES6 = add(0);
console.log(result2ES6);

function fullName(first, second = "chowdhury") {
  const name = first + " " + second;
  return name;
}

const name = fullName("aslam");
console.log(name);

// প্যারামিটার : ফাংশনে যেগুলো ডিক্লেয়ার করা হয় সেগুলে প্যারামিটার
// আর্গুমেন্ট : আর্গুমেন্ট হল যেগুলো পাঠানো হয়। আর্গুমেন্ট চাইলে কম অথবা বেশিও দেওয়া যায়।

// ডিফল্ট প্যারামিটারের সুবিধা হলো যদি কোনো সময় সকল আর্গুমেন্ট না পাঠানো হয় তবে ডিফল্ট প্যারমিটারকে প্যারামিটার হিসেবে ধরে নিবে। সেক্ষেত্রে প্যারামিটার যে কোনো কিছু হতে পারে number, string, array, object
