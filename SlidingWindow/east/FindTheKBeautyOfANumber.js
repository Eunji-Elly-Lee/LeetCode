// https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/
// Math / String / Sliding Window

// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:
// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.
// Note:
// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  // Convert the number to a string for easier substring extraction
  const numberString = num.toString();

  // Create and initialize the k-beauty as 0
  let kBeauty = 0;

  // Iterate through the number string using a for loop up to the length minus k
  for (let index = 0; index <= numberString.length - k; index++) {
    // Get the substring with the length of k and convert it to a number
    const subNumber = Number(numberString.slice(index, index + k));

    // If the subnumber is not 0 and is a divisor of num, increase the k-beauty
    if (subNumber !== 0 && num % subNumber === 0) {
      kBeauty++;
    }
  }

  // Return the k-beauty
  return kBeauty;
};

// The time complexity of this function is O(n), where n is the number of digits in the input number.
// This is because the function iterates through each digit in the number string once.
// The space complexity of this function is O(1), as it only uses a constant amount of additional space regardless of the size of the input number.
