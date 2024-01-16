// https://leetcode.com/problems/maximum-strong-pair-xor-i/description/
// Array / Hash Table / Bit Manipulation / Trie / Sliding Window

// You are given a 0-indexed integer array nums.
// A pair of integers x and y is called a strong pair if it satisfies the condition:
// |x - y| <= min(x, y)
// You need to select two integers from nums such that they form a strong pair and their bitwise XOR is the maximum among all strong pairs in the array.
// Return the maximum XOR value out of all possible strong pairs in the array nums.
// Note that you can pick the same integer twice to form a pair.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  // Create and initialize the maximum XOR value for strong pairs to 0
  let maximumXOR = 0;

  // Iterate through the input array using a for loop for the first number of a pair
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    // Iterate through the input array using a for loop for the second number of a pair
    for (
      let secondIndex = firstIndex;
      secondIndex < nums.length;
      secondIndex++
    ) {
      const firstNumber = nums[firstIndex];
      const secondNumber = nums[secondIndex];

      // If the current numbers of the pair are different and satisfy the given condition
      // update the maximum XOR value as a higher value
      // If the current numbers of the pair are same, skip the calculation since the XOR value would be 0
      if (
        firstNumber !== secondNumber &&
        Math.abs(firstNumber - secondNumber) <=
          Math.min(firstNumber, secondNumber)
      ) {
        maximumXOR = Math.max(maximumXOR, firstNumber ^ secondNumber);
      }
    }
  }

  // Return the maximum XOR value for strong pairs
  return maximumXOR;
};

// The time complexity of this code is O(n^2), where n is the length of the `nums` array.
// This is because there are two nested loops that iterate through the `nums` array, resulting in a quadratic time complexity.
// The space complexity of this code is O(1), as there are no additional data structures being used that depend on the size of the input.
// The only space being used is for the `maximumXOR` variable, which is a constant amount of space.
