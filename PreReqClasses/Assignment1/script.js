//1. Find max of 3 elements

let c = 20;
let a = 30;
let b = 10;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
//OR
let temp = a > b ? a : b;
let largest = temp > c ? temp : c;

document.write(`Maximum of three values is : ${largest} <br>`);

//----------------------------------------------------------------

//2. Find min of 3 elements

const temp1 = a < b ? a : b;
const min = temp1 < c ? temp1 : c;
document.write(`Minimum of three values is : ${min} <br>`);
//----------------------------------------------------------------
//3. Find mid of 3 elements

const temp2 = a > b ? a : b;
const mid = temp2 < c ? temp2 : c;
document.write(`Minimum of three values is : ${mid} <br>`);
//----------------------------------------------------------------

//5. Return all odd elements from array
// [1,5,6,4,3,2,8] should return => [1,5,3]

let arr = [1, 5, 6, 4, 3, 2, 8];
let oddArray = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddArray.push(arr[i]);
  }
}
document.write(`Odd Array Element/s: ${oddArray}<br>`);
//----------------------------------------------------------------

//6. Find sum of array elements
// [1,2,6,3,5] should return => 17

let array = [1, 2, 6, 3, 5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
document.write(`Sum is: ${sum}<br>`);
//----------------------------------------------------------------
// 7. find first even number in array if there is no even return -1
// [1,2,6,3,5] => should return 2
// [1,7,9,3,5] => should return -1
// [1,7,4,8,5] => should return 4

let array1 = [1, 7, 9, 3, 5];
function findFirstEvenNumber(array) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
      return array1[i];
    }
  }
  return -1;
}
let firstEvenNumber = findFirstEvenNumber(array1);
document.write(`Number is: ${firstEvenNumber}<br>`);
