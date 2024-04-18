function countOccurance(wordString, letter) {
  let wordFrame = wordString.toLowerCase();
  let charachter = letter.toLowerCase();

  let count = 0;

  for (let i = 0; i < wordFrame.length; i++) {
    // console.log(i, wordString[i]);
    if (wordFrame[i] === charachter) {
      count++;
    }
  }
  console.log("Charachter", charachter, "count is =", count);
}

countOccurance("heelo worERWEREREREWdld dkd", "E");
