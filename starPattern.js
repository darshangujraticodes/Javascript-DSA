/*

****
****
****
****

*/

let i = 1;
let j = 1;

function squareStar() {
  let row = 5;
  let str = "";

  console.log("Square Star Pattern \n");

  for (i = 1; i < row; i++) {
    for (j = 1; j < row; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }

  console.log(str);
  console.log("\n");
}

squareStar();

/*

*
**
***
****

*/

function leftTriangleStar() {
  let row = 5;
  let str = "";

  console.log("left triangle Star Pattern \n");

  for (i = 1; i < row; i++) {
    for (j = 1; j < i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
  console.log("\n");
}

leftTriangleStar();

/*

   *
  **
 ***
****  

*/

function rightTriangleStar() {
  let row = 5;
  let str = "";

  console.log("right triangle Star Pattern \n");

  for (i = 1; i < row; i++) {
    // print space
    for (j = 1; j < row - i; j++) {
      str += " ";
    }
    // print star
    for (let k = 0; k < i; k++) {
      str += "*";
    }

    str += "\n";
  }

  console.log(str);
  console.log("\n");
}

rightTriangleStar();

/*

****
***
**
* 

*/

function leftDownTriangleStar() {
  let row = 5;
  let str = "";

  console.log("Left Down triangle Star Pattern \n");

  for (i = row; i > 0; i--) {
    for (j = 1; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }

  console.log(str);
}

leftDownTriangleStar();
