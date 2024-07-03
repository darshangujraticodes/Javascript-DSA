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
  let minVal = arrayValue[0];
  let missingVal = [];

  for (let k of arrayValue) {
    if (maxVal < k) {
      maxVal = k;
    }
    if (minVal > k) {
      minVal = k;
    }
  }
  // console.log("Array max value  = ", maxVal);

  for (let i = minVal; i <= maxVal; i++) {
    if (!arrayValue.includes(i)) {
      missingVal.push(i);
    }
  }
  console.log("Array value  = ", arrayValue, maxVal, minVal);

  console.log("Array missing value  = ", missingVal);
}

findMissingValue([11, 12, 13, 14, 19, 16, 17, 5]);

// find missing letter

let alphabets = "abcdefghijklmnopqrstuvwxyz";

function missingLetter(arrayLetters) {
  let temp = arrayLetters;
  let missingArray = [];

  let splitVal = alphabets.split("");
  // console.log(splitVal);

  let startLetterPosition = 1;
  let endLetterPosition = 1;

  for (let i of arrayLetters) {
    // console.log(i, splitVal.indexOf(i));

    if (startLetterPosition > splitVal.indexOf(i)) {
      startLetterPosition = splitVal.indexOf(i);
    }

    if (endLetterPosition < splitVal.indexOf(i)) {
      endLetterPosition = splitVal.indexOf(i);
    }
  }

  for (let i = startLetterPosition; i <= endLetterPosition; i++) {
    if (!arrayLetters.includes(splitVal[i])) {
      missingArray.push(splitVal[i]);
    }
  }
  console.log(missingArray);
  // console.log(startLetterPosition, endLetterPosition);
}

missingLetter(["b", "c", "f", "l", "a"]);
