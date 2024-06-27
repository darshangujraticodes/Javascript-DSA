// sum of given number eg : 485 => 17

function sumOfNumber(num) {
  let temp = num;
  let rem;
  let sum = 0;
  while (num > 0) {
    rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
  }

  console.log("Sum of", temp, " = ", sum);
}

sumOfNumber(485);

// reverse of given number eg : 485 => 584

function reverseOfNumber(num) {
  let temp = num;
  let rem;
  let rev = 0;

  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }

  console.log("Reverse of", temp, " = ", rev);

  if (temp === rev) {
    console.log("Given Input Value is Palindrome !");
  }
}

reverseOfNumber(121);
