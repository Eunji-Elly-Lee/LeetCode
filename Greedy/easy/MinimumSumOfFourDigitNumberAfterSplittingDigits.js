// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
// Math / Greedy / Sorting

// You are given a positive integer num consisting of exactly four digits.
// Split num into two new integers new1 and new2 by using the digits found in num.
// Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.
// Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  // Sort the input number in ascending order
  const digitsArray = num.toString().split("");
  const sortedDigits = digitsArray.sort((a, b) => a - b);

  // Return the sum of the combination of the first and last digits
  // and the combination of the second and third digits
  return (
    Number(sortedDigits[0] + sortedDigits[3]) +
    Number(sortedDigits[1] + sortedDigits[2])
  );
};

// The time complexity of this code is O(n log n), where n is the number of digits in the input number `num`.
// This is because the code first converts the number to a string and splits it into an array of digits, which takes O(n) time.
// Then, it sorts the array of digits using the Array.sort() method, which has a time complexity of O(n log n).
// Finally, it performs two concatenations and two conversions from string to number, which take constant time.
// The space complexity of this code is O(n), where n is the number of digits in the input number `num`.
// This is because the code creates an array of digits, which requires O(n) space to store all the digits.
