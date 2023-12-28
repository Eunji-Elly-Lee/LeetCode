// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
// String / Greedy

// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros.
// For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
// Given a string n that represents a positive decimal integer,
// return the minimum number of positive deci-binary numbers needed so that they sum up to n.

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  // Create and initialize the maximum digit to 0
  let maximumDigit = 0;

  // Iterate through the input string using a for...of loop
  for (const number of n) {
    // If the current number is greater than the maximum digit, update the maximum digit to the current number
    if (Number(number) > maximumDigit) {
      maximumDigit = Number(number);
    }

    // If the maximum digit is equal to 9, return the maximum digit
    if (maximumDigit === 9) {
      return maximumDigit;
    }
  }

  // Return the maximum digit
  return maximumDigit;
};

// The time complexity of this code is O(n), where n is the length of the input string `n`.
// This is because the code iterates through each element of the string once in the for loop.
// The space complexity of this code is O(1) because it only uses a constant amount of additional space to store the `maximumDigit` variable.
// The space used does not depend on the size of the input string.
