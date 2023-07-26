const array1 = [3, 4, 5, 6, 17, 8, 9];
const array2 = [2, 3, 4, 5, 6];

let newArray = [];

const arrayFunctions = (arr1, arr2) => {
  newArray = [...arr1, ...arr2];
  console.log(Math.max(...newArray));
};

arrayFunctions(array1, array2);
