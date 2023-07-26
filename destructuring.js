const fish = {
  name: "king fish",
  address: "chandpure",
  color: "silver",
  phone: "017349834534095",
  price: 4000,
};

// এখানে fish হচ্ছে একটি অবজেক্ট, অবজেক্ট থেকে প্রতিটি প্রপার্টি মান আলাদা আলাদাভাবে নিতে বার fish.name, fish.address, fish.color, এভাবে না লিখে একবারে নেওয়ার একটি উপায় আছে।

const { color, phone, price } = fish;
console.log(color);
console.log(price);

// এক্ষেত্রে যে ভেরিয়াবেল গুলো ডিক্লিয়অর করব সেগুলো অবজেক্টের প্রর্পাাটি সাথে মিল রেখে এক্সাকটলি সেই নাম দিতে হবে।

// Array destructuring
const [first, another] = [44, 99];
// console.log(first, another);
const [first1, another1, first2, second1, second2] = [44, 99, 9, 15, 22, 56];
console.log(first1, another1, first2, second1, second2);

const nayoks = ["shakib", "bappi", "raja"];
const [king, lost, notun] = nayoks;
console.log(lost);

function getNames() {
  return ["alim", "halim"];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);
