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

// array methods

const ages = [32, 33, 16, 40, 78, 65, 84, 96];

const student = [
  {
    name: "Darshan",
    profession: "Full Stack Developer",
  },
];

// filter method
const filterResult = ages.filter((age) => age >= 18);

// sort method
const sortResult = ages.sort();

// map method it cannot be stored in variable would lead to NaN
const mapResult = student.map((t) => t * 2);

// forEach method it cannot be stored in variable would lead to NaN
const foreachResult = ages.forEach((age) => console.log(age));

console.log("filter Result =", filterResult);
console.log("Sort Result = ", sortResult);
console.log(
  "Map Result = ",
  student.map((t) => t * 2)
);
console.log(
  "forEach Result = ",
  ages.forEach((item, index, arr) => console.log(item, index, arr))
);
