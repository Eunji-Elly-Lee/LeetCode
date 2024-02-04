// https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/description/
// Array / Dynamic Programming / Sliding Window

// Given an integer array nums and two integers firstLen and secondLen,
// return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.
// The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.
// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  // Create and initialize the prefix sum array
  let prefixSum = new Array(nums.length + 1).fill(0);

  // Calculate the prefix sums for efficient subarray sum computations
  for (let index = 0; index < nums.length; index++) {
    prefixSum[index + 1] = prefixSum[index] + nums[index];
  }

  // Create and initialize variables to track the maximum sums for the first and second subarrays,
  // as well as the maximum sum of two non-overlapping subarrays
  let firstMaximumSum = 0;
  let secondMaximumSum = 0;
  let maximumSum = 0;

  // Iterate through the input array using a for loop, starting from the sum of the lengths of the two subarrays
  for (let index = firstLen + secondLen; index <= nums.length; index++) {
    // Update maximum sums for the first and second subarrays
    firstMaximumSum = Math.max(
      firstMaximumSum,
      prefixSum[index - secondLen] - prefixSum[index - firstLen - secondLen]
    );
    secondMaximumSum = Math.max(
      secondMaximumSum,
      prefixSum[index - firstLen] - prefixSum[index - firstLen - secondLen]
    );

    // Calculate the maximum sum of the current two non-overlapping subarrays
    const maximumSubSum = Math.max(
      prefixSum[index] + firstMaximumSum - prefixSum[index - secondLen],
      prefixSum[index] + secondMaximumSum - prefixSum[index - firstLen]
    );

    // Update the overall maximum sum of two non-overlapping subarrays
    maximumSum = Math.max(maximumSum, maximumSubSum);
  }

  // Return the maximum sum
  return maximumSum;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because there are two loops in the code, but both loops iterate over the array `nums` once, so the time complexity is linear.
// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code creates a new array called `prefixSum` with a length of nums.length + 1, which requires O(n) space.
// Additionally, there are a few variables used to store the maximum sums, but these variables do not depend on the size of the input array,
// so they do not contribute to the overall space complexity.
