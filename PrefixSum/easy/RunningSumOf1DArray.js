// https://leetcode.com/problems/running-sum-of-1d-array/description/
// Array / Prefix Sum

// Given an array nums.
// We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // Create the running sum array and push the first element of the input array to it
  const runningSum = [];
  runningSum.push(nums[0]);

  // Iterate through the input array using a for loop
  for (let index = 1; index < nums.length; index++) {
    // Calculate the sum of the current position and push it to the running sum array
    runningSum.push(runningSum[index - 1] + nums[index]);
  }

  // Return the running sum array
  return runningSum;
};

// The time complexity of this solution is O(n) because we iterate through the input array once to calculate the running sum.
// The space complexity is also O(n) because we create a new array to store the running sum values.
