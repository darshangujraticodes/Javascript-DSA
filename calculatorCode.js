function calculator(num1, num2, opr) {
  const n1 = num1;
  const n2 = num2;
  const operator = String(opr);
  //   console.log(operator, typeof operator);
  let res;

  if (operator === "+") {
    res = n1 + n2;
    return res;
  } else if (operator === "-") {
    res = n1 - n2;
    return res;
  } else if (operator === "*") {
    res = n1 * n2;
    return res;
  } else if (operator === "/") {
    res = n1 / n2;
    return res;
  } else {
    return "Invalid Operator for Calulation !!";
  }
}

console.log("add = ", calculator(20, 10, "+"));

console.log("subtract = ", calculator(20, 10, "-"));

console.log("Multiple = ", calculator(20, 10, "*"));

console.log("Division = ", calculator(20, 10, "/"));

console.log("Other Operator = ", calculator(20, 10, "^"));
