// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
// Array / Greedy

// You are given a 0-indexed integer array nums and an integer k.
// Your task is to perform the following operation exactly k times in order to maximize your score:
// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  // Create and initialize the maximum number as the first element of the input array
  let maximumNumber = nums[0];

  // Iterate through the input array using a for loop
  for (let index = 1; index < nums.length; index++) {
    // If the current number is greater than the maximum number, update the maximum number
    if (nums[index] > maximumNumber) {
      maximumNumber = nums[index];
    }
  }

  // Create and initialize the achieved score to 0
  let achievedScore = 0;

  // Iterate through the summation process using a for loop k times
  for (let score = maximumNumber; score < maximumNumber + k; score++) {
    achievedScore += score;
  }

  // Return the sum of the achieved score
  return achievedScore;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through the array once in the first for loop to find the maximum number,
// and then iterates `k` times in the second for loop.
// The overall time complexity is determined by the length of the input array.
// The space complexity of this code is O(1) because it uses a constant amount of additional space.
// The variables `maximumNumber` and `achievedScore` are the only additional variables used,
// and they do not depend on the size of the input array.
