// https://leetcode.com/problems/jump-game-ii/
// Array / Dynamic Programming / Greedy

// You are given a 0-indexed array of integers nums of length n.
// You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i.
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1].
// The test cases are generated such that you can reach nums[n - 1].

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // Create and initialize the current endpoint to -1
  let currentEnd = -1;
  // Create and initialize the next point to 0
  let nextPoint = 0;
  // Create and initialize the number of jumps to 0
  let NumberOfJumps = 0;

  // Iterate through the input array using a for loop
  // until the next point is smaller then the length of the input array
  for (let index = 0; nextPoint < nums.length - 1; index++) {
    // If the current index is greater than the current endpoint,
    // increase the number of jumps and update the current endpoint to the next point
    if (index > currentEnd) {
      NumberOfJumps++;
      currentEnd = nextPoint;
    }

    // If the sum of the current index and its value is greater than the next point,
    // update the next point as the sum of the current index and its value
    if (index + nums[index] > nextPoint) {
      nextPoint = index + nums[index];
    }
  }

  // Return the number of jumps
  return NumberOfJumps;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through the array once in the for loop,
// checking each element and updating the `currentEnd` and `nextPoint` variables.
// The space complexity of this code is O(1),
// as it only uses a constant amount of extra space to store the `currentEnd`, `nextPoint`, and `NumberOfJumps` variables.
// The space used does not depend on the size of the input array `nums`.
