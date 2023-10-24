//    * * * * *
//    * * * *
//    * * *
//    * *
//    *

//Approach 1

let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    document.write("*");
  }
  document.write("<br>");
}

//Approach 2

// let n = 5;
// for (let i = 5; i <= n; i--) {
//   for (let j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

//Approach 3

// let n = 5;
// while (n > 0) {
//   for (let j = 1; j <= n; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
//   n--;
// }
///----------------------------------------------------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let x = 5;
for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(" " + j);
  }
  document.write("<br>");
}
//----------------------------------------------------------------

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let y = 5;
for (let i = 1; i <= y; i++) {
  for (let j = 1; j <= y - i + 1; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}
//----------------------------------------------------------------
