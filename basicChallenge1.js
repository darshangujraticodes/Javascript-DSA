// Math Calculator Challenge 1

function calculator(num1, num2, opr) {
  let n1 = num1;
  let n2 = num2;
  let result;
  let mathOpr = opr;

  if (mathOpr == "+") {
    result = n1 + n2;
    return result;
  }

  if (mathOpr == "-") {
    result = n1 - n2;
    return result;
  }

  if (mathOpr == "*") {
    result = n1 * n2;
    return result;
  }

  if (mathOpr == "/") {
    result = n1 / n2;
    return result;
  }

  if (
    !mathOpr ||
    mathOpr != "+" ||
    mathOpr != "-" ||
    mathOpr != "*" ||
    mathOpr != "/"
  ) {
    return "Invalid Operation";
  }
}

// console.log("add = ", calculator(8, 2, "+"));
// console.log("subtract = ", calculator(8, 2, "-"));
// console.log("multiply = ", calculator(8, 2, "*"));
// console.log("divide = ", calculator(8, 2, "/"));
// console.log("invalid = ", calculator(8, 2, "$"));

// letter Occurance Challenge 2

function countOccurrance(stringValue, let) {
  let stringVal = stringValue.toLowerCase();
  let findCount = let.toLowerCase();

  let letterCount = {};

  for (let k of stringVal) {
    if (letterCount[k] == null) {
      letterCount[k] = 1;
    } else {
      letterCount[k] += 1;
    }
  }

  //   console.log(letterCount);
  //   console.log(`${findCount} = ${letterCount[findCount]}`);
}

countOccurrance("banana", "A");

// find Max Value in Array Challenge 3

function arrayMaxValue(arrayData) {
  let arrVal = arrayData;
  let temp = arrVal[0];

  for (let k of arrVal) {
    // console.log(k);
    if (temp < k) {
      temp = k;
    }
  }
  console.log("Array Max Value = ", temp);
}

arrayMaxValue([78, 454, 5, 54, 65, 5456, 4, 654]);

// Convert string statement in Pascal case (title case)
/*
Three Types of case
camelCase   ->  arrayData  (javascript) 
snake_case  -> array_data  (python, ruby)
PascalCase  -> ArrayData   (c++, java)
*/

function titleCase() {}
