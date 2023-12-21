// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
// Array / Greedy

// You are given an integer array nums (0-indexed).
// In one operation, you can choose an element of the array and increment it by 1.
// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.
// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1.
// An array of length 1 is trivially strictly increasing.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  // Create and initialize the number of operations to 0
  let numberOfOperations = 0;

  // Iterate through the input array using a for loop
  for (let index = 1; index < nums.length; index++) {
    // If the current number is less than or equal to the previous number,
    // update the number of operations by adding the difference between the two numbers plus 1
    // Also, increase the current number to make it strictly increasing
    if (nums[index] <= nums[index - 1]) {
      numberOfOperations += nums[index - 1] - nums[index] + 1;
      nums[index] = nums[index - 1] + 1;
    }
  }

  // Return the number of operations
  return numberOfOperations;
};

// The time complexity of this code is O(n), where n is the length of the `nums` array.
// This is because the code iterates through the `nums` array once in the for loop.
// The space complexity of this code is O(1)
// because it only uses a constant amount of additional space to store the `numberOfOperations` variable.
// The space used does not depend on the size of the input.
