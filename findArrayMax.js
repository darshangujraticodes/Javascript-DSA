function findMaxArray(numArray) {
  const nArray = numArray;
  let max = nArray[0];

  for (let k of nArray) {
    if (k > max) {
      max = k;
    }
  }
  console.log("Max Value of Array = ", max);
}

findMaxArray([78, 858, 644, 1, 64, 695, 52, 3, 16, 46, 6, 10]);
