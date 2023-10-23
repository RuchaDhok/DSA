let c = 10;
let b = 20;
let a = 30;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;

//OR

let temp = a > b ? a : b;
let largest = temp > c ? temp : c;

document.write(`Maximum of three values is : ${largest}`);
