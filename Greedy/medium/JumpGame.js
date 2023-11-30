// https://leetcode.com/problems/jump-game/
// Array / Dynamic Programming / Greedy

// You are given an integer array nums.
// You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // Create and initialize a maximum jump length to 0
  let maximumJump = 0;

  // Iterate through the input array using a for loop
  for (let index = 0; index < nums.length; index++) {
    // If the current index is greater than the maximum jump length,
    // it means we can't reach the current index; return false
    if (index > maximumJump) {
      return false;
    }

    // If the sum of the current index and its value is greater than the maximum jump length,
    // update the maximum jump length as the sum of the current index and its value
    if (index + nums[index] > maximumJump) {
      maximumJump = index + nums[index];
    }

    // If the maximum jump length is greater than or equal to the last index,
    // it means we can reach the last index; return true
    if (maximumJump >= nums.length - 1) {
      return true;
    }
  }

  // If the loop completes without returning,
  // it means we can't reach the last index; return false
  return false;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through the array once in the for loop.
// The space complexity of this code is O(1) because it only uses a constant amount of extra space to store the `maximumJump` variable.
// The space used does not depend on the size of the input array.
