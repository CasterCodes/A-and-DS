const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }

  return -1;
};

const data = [1, 2, 3, 4, 5, 6, 12, 34, 56, 67];
const target = 0;

// find the largest element of an array

const greatestValue = (arr) => {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// get the first three largest numbers of an array
const getThreeLargestNumbers = (arr) => {
  if (arr.length < 3) return -1;

  let firstNumber,
    secondNumber,
    thirdNumber = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstNumber) {
      thirdNumber = secondNumber;
      secondNumber = firstNumber;
      firstNumber = arr[i];
    } else if (arr[i] > secondNumber) {
      thirdNumber = secondNumber;
      secondNumber = arr[i];
    } else if (arr[i] > thirdNumber) {
      thirdNumber = arr[i];
    }
  }

  return [firstNumber, secondNumber, thirdNumber];
};

const findMeanOfArray = (arr) => {
  if (arr.length < 0) return -1;

  if (arr.length == 1) return arr[0];

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total += arr[i];
  }

  return total / arr.length;
};

const findMedianOfArray = (arr) => {
  const length = arr.length;

  let sortArray = arr.sort();

  if (length % 2 != 0) return sortArray[length / 2];

  console.log({
    prevValue: arr[Math.floor((length - 1) / 2)],
    presentValue: arr[length / 2],
  });

  return arr[Math.floor((length - 1) / 2)] + arr[length / 2] / 2;
};

// console.log({ value: linearSearch(data, target) });
// console.log({ greatestValue: greatestValue([23, 56, 67, 789]) });
// console.log({ threeLargestNumber: getThreeLargestNumbers([23, 56, 67, 789]) });

console.log({
  findMeanOfArray: findMeanOfArray([23, 56, 67, 789]),
});

// console.log({
//   findMedianOfArray: findMedianOfArray([23, 56, 67, 789]),
// });
