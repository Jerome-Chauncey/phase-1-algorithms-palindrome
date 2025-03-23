function isPalindrome(word) {
  //reverse the string
  let reversedString = word.split("").reverse().join("");

  //compare original and reversed string

  return word === reversedString
  // Write your algorithm here
  // I need to wirte  a function that checks if a given string readsthe same
  //fowards and backwards

  //inputs eg. isPalindrome("racecar")= true
  //is Palindrome("hello")= false
  //input is a lowercase string with only letters
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("ab"));

/* 
  Add your pseudocode here
*/ //reverse the input string
//compare the original string with the reversed string
//if they match return true; otherwise, return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
