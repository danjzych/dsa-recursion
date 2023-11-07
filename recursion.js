/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //if this word is longer, return this word
  //if the other word is longer, return that one

  //at the end, return the length of the word

  // if (words.length === 1) return words[0].length;

  // if (words[0].length <= words[1].length) {
  //   return longest(words.slice(1));
  // } else {
  //   const resultArray = words.slice(2);
  //   return longest(resultArray.push(words[0]));
  // }
  const currentLength = words[0].length;

  for (let el in words.slice(1)) {
    if (currentLength < el.length) {
      return longest(words.slice(1));
    }
  }

  return currentLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
