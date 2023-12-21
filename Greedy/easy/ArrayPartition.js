// https://leetcode.com/problems/array-partition/
// Array / Greedy / Sorting / Counting Sort

// Given an integer array nums of 2n integers,
// group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized.
// Return the maximized sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  // Create and initialize the sum to 0
  let sum = 0;

  // Iterate through the input array using a for loop,
  // and calculate the sum of elements at even indexes
  for (let index = 0; index < nums.length; index += 2) {
    sum += nums[index];
  }

  // Return the calculated sum
  return sum;
};

// The time complexity of this code is O(n log n) because the sorting operation has a time complexity of O(n log n),
// where n is the length of the array `nums`.
// The for loop has a time complexity of O(n/2), but the dominant factor is the sorting operation.
// The space complexity of this code is O(1) because it only uses a constant amount of extra space to store the `sum` variable.
// The sorting operation is done in-place and does not require any additional space.
