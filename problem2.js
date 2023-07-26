// const friendsArray = ["kalam", "salam", "sahad", "jalam", "gelam", "paylam"];

// const problem1 = (friends) => {
//   for (let i = 0; i < friends.length; i++) {
//     const friendName = friends[i];
//     console.log(friendName);
//   }
// };
// // const problem1Result = problem1;
// problem1(friendsArray);

const friendsArray = ["kalam", "salm", "sahad", "jalm", "gelam", "paylam"];

const problem1 = (friends) => {
  let newArray = [];
  for (let i = 0; i < friends.length; i++) {
    const friendName = friends[i];
    const friendString = friendName.split("");
    if (friendString.length % 2 == 0) {
      newArray.push(friendName);
    }
  }
  return newArray;
};
// const problem1Result = problem1;
const result = problem1(friendsArray);
console.log(result);
