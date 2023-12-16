// https://leetcode.com/problems/maximum-69-number/
// Math / Greedy

// You are given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // Create an array of strings to store the digits of the input number
  const digitsArray = num.toString().split("");

  // Iterate through the array using a for loop
  for (let index = 0; index < digitsArray.length; index++) {
    // If the current digit is 6, replace it with 9
    if (digitsArray[index] === "6") {
      digitsArray[index] = "9";

      // Return the updated array as a number
      // Since the current number, with the first 6 changed to 9, is the largest
      return Number(digitsArray.join(""));
    }
  }

  // If no 6 is found, return the original number
  return num;
};

// The time complexity of this code is O(n), where n is the number of digits in the input number `num`.
// This is because the code iterates through each digit in the number once in the for loop.
// The space complexity is O(n) as well.
// This is because the code creates an array of strings to store the digits of the number `num`,
// which requires additional space proportional to the number of digits in the input number.
