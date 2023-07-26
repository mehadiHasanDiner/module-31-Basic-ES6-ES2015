const numbersArray = [2, 3, 4, 3, 5];

let total = 0;

const getTotals = (arrayElements) => {
  for (const element of arrayElements) {
    // console.log(element);
    const numberElement = Math.pow(element, 2);
    total += numberElement;
  }
  const totalAverage = total / arrayElements.length;
  return totalAverage;
};

const result = getTotals(numbersArray);
console.log(result);
