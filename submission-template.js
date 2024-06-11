const findSum = function (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const findFrequency = function (array) {
  const frequencies = array.map(
    (element1) => array.filter((element2) => element2 === element1).length
  );
  const maxFrequency = Math.max(...frequencies);
  const mostFreqIndex = frequencies.indexOf(maxFrequency);
  const leastFrequency = Math.min(...frequencies);
  const leastFreqIndex = frequencies.indexOf(leastFrequency);

  const mostFrequentItem = array[mostFreqIndex];
  const leastFrequentItem = array[leastFreqIndex];

  return { most: mostFrequentItem, least: leastFrequentItem };
};

const isPalindrome = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) != str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const largestPair = function (array) {
  let products = [];

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];
    let product = currentNum * nextNum;

    if (product) {
      products.push(product);
    }
  }

  return Math.max(...products);
};

const removeParenth = function (str) {
  const letters = [...str];
  const result = letters.filter((letter) => letter !== "(" && letter !== ")");
  return result;
};

const scoreScrabble = function (str) {
  const scoreReference = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d", "g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j", "x"],
    10: ["q", "z"],
  };

  let userText = str.split("");
  let totalScore = 0;

  userText.forEach((character) => {
    for (const [score, letter] of Object.entries(scoreReference)) {
      if (letter.includes(character)) {
        totalScore += parseInt(score);
      }
    }
  });

  return totalScore;
};
