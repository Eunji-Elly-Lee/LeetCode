// https://leetcode.com/problems/left-and-right-sum-differences/description/
// Array / Prefix Sum

// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:
// leftSum[i] is the sum of elements to the left of the index i in the array nums.
// If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums.
//If there is no such element, rightSum[i] = 0.
// Return the array answer.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  // Create an array for the right sum with the same length as the input array,
  // and initialize all elements to 0
  const rightSum = new Array(nums.length).fill(0);

  // Iterate through the input array using a for loop starting from the last element to the second element
  for (let index = nums.length - 1; index > 0; index--) {
    // Calculate the right sum value and update the right sum array
    rightSum[index - 1] = rightSum[index] + nums[index];
  }

  // Create an empty array for the absolute difference values and push the first element of the right sum array
  const answer = [];
  answer.push(rightSum[0]);
  // Create and initialize the prefix sum with the first element of the input array
  let prefixSum = nums[0];

  // Iterate through the right sum array using a for loop starting from the second element
  for (let index = 1; index < rightSum.length; index++) {
    // Calculate the absolute difference value between the current prefix sum and the current right sum
    answer.push(Math.abs(prefixSum - rightSum[index]));
    // Update the prefix sum by adding the current element of the input array
    prefixSum += nums[index];
  }

  // Return the final absolute difference values
  return answer;
};

// The time complexity of this solution is O(n) because we iterate through the input array nums twice,
// once to calculate the right sum and once to calculate the absolute differences.
// The space complexity is O(n) as well because we use an additional array of the same length as nums to store the right sum values and the answer.
