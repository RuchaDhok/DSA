let string = "hello world";

//Convert to array
console.log(string.split(""));

//Find the length
console.log(string.length);

// for(let i=0; i<)

//Check if the two strings are anagrams

let str1 = "hello";
let str2 = "sdsdsc";

function isAnagram(str1, str2) {
  if (str1.length === str2.length) {
    if (str1.split("").sort().join("") == str2.split("").sort().join("")) {
      return true;
    }
  } else return false;
}

const result = isAnagram(str1, str2);
console.log(result);
