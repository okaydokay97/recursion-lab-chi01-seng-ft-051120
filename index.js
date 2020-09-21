function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let [firstLetter] = string;
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    let toAdd = array.shift()
    return addUpTo(array, index - 1) + toAdd
  } else {
    return array[0]
  }
}

function maxOf(array) {
  if (array.length - 1 > 0) {
    let large = array.shift()
    return Math.max(maxOf(array), large)
  } else {
    return 0
  }
}

function includesNumber(array, number) {
  if (array.length - 1 > 0) {
    let testNum = array.shift()
    if (testNum === number) {
      return true
    }
    return includesNumber(array, number)
  } else {
    return false
  }
}