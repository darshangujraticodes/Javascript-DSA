// fizzBuzzArray Challenge 1

function fizzBuzzArray(number) {
  let temp = number;
  let arr = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzzArray(18));

// Array Intersection Challenge 2

function arrayIntersection(array1, array2) {
  console.log(array1, array2);

  let intersectionArray = [];

  for (let k of array1) {
    if (array2.includes(k)) {
      intersectionArray.push(k);
    }
  }

  console.log("intersection Array =", intersectionArray);
}

arrayIntersection([1, 2, 4, 5, 6], [5, 6, 8, 9, 10, 15]);

// find missing number

function findMissingValue(arrayValue) {
  let temp = arrayValue;
  let maxVal = arrayValue[0];
  let missingValue;

  for (let k of arrayValue) {
    if (maxVal < k) {
      maxVal = k;
    }
  }
  // console.log("Array max value  = ", maxVal);

  for (let i = maxVal; i > 0; i--) {
    if (!arrayValue.includes(i)) {
      missingValue = i;
    }
  }
  console.log("Array value  = ", arrayValue);

  console.log("Array missing value  = ", missingValue);
}

findMissingValue([1, 2, 3, 4, 9, 6, 7, 5]);
