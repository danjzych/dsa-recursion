/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  const currentLength = words[0].length;

  for (let el of words.slice(1)) {
    if (currentLength < el.length) {
      return longest(words.slice(1));
    }
  }

  return currentLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // "hello" -> h + unknown
  // "llo" -> l + unknown
  // "o" -> o || "" -> ""
  // hlo

  if (str.length < 2) return str;

  return [str[0], ...everyOther(str.substring(2))].join("");
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // tacocat -> return isPalindrome("acoca")
  // acoca -> return isPalindrome("coc");
  // "O" -> true
  // "" -> true

  if (str[0] !== str[str.length - 1]) return false;

  if (str.length < 2) return true;

  return isPalindrome(str.substring(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // cat -> [t, ...unknown], t [ a, c]
  // ca - > [a, ... unknown] -> a, c
  // c -> c

  if (str.length < 2) return str;

  return [str[str.length - 1], ...revString(str.slice(0, -1))].join("");
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  //if length is 0 we want to return -1
  if (arr.length === 0) return -1;
  //if we are currently looking at the value, return 0
  if (arr[0] === val) return 0;

  const returnedValue = findIndex(arr.slice(1), val);

  if (returnedValue === -1) {
    return -1;
  } else {
    return returnedValue + 1;
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // strings.push(gatherStrings(obj[key]));
      strings = [...strings, ...gatherStrings(obj[key])];
    } else if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    }
  }

  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present).
 *
 * Solved our own way
 */

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  if (arr.length <= 2) {
    if (arr[0] === val) {
      return true;
    } else if (arr[1] === val) {
      return true;
    } else {
      return false;
    }
  }

  let mid = Math.floor((low + high) / 2);
  let guess = arr[mid];

  if (guess === val) {
    return true;
  } else if (guess > val) {
    return binarySearch(arr.slice(0, mid), val);
  } else {
    return binarySearch(arr.slice(mid), val);
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 *
 * Solved the book way -> grokking algorithms
 */

function binarySearchIndex(arr, val, low = 0, high = arr.length) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === val) {
      return mid;
    } else if (guess > val) {
      return binarySearchIndex(arr, val, low, mid - 1);
    } else {
      return binarySearchIndex(arr, val, mid + 1, high);
    }
  }

  return -1;
}

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
