function reverseValue(n) {
  let num = n;
  let rev = 0;

  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }

  console.log(`Reverse Value of ${n} is ${rev}`);
}

function sumValue(n) {
  let num = n;
  let sum = 0;

  while (num > 0) {
    rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
  }

  console.log(`Sum of Value ${n} is ${sum}`);
}

reverseValue(48);
sumValue(48);
