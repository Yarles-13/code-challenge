const findSum = function(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum 
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right){
    if (str.charAt(left) != str.charAt(right)){
      return false
    }
    left++;
    right --;
  }

  return true
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
