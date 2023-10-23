//Find max of 3 elements

let c = 10;
let b = 20;
let a = 30;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
//OR
let temp = a > b ? a : b;
let largest = temp > c ? temp : c;

document.write(`Maximum of three values is : ${largest} <br>`);

//----------------------------------------------------------------

//Find min of 3 elements

const temp1 = a < b ? a : b;
const min = temp1 < c ? temp1 : c;
document.write(`Minimum of three values is : ${min} <br>`);
//----------------------------------------------------------------
