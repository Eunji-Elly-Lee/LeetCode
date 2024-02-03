// https://leetcode.com/problems/max-consecutive-ones-iii/
// Array / Binary Search / Sliding Window / Prefix Sum

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // Create and initialize variables for the maximum length of a subarray with consecutive 1's, the counter, and the left index
  let maximumLength = 0;
  let counter = 0;
  let leftIndex = 0;

  // Iterate through the input array using a for loop with the right index
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    // If the current number is 0, increase the counter
    if (nums[rightIndex] === 0) {
      counter++;
    }

    // Move the left index to find the subarray where the number of 0's is less than k
    while (counter > k) {
      if (nums[leftIndex] === 0) {
        counter--;
      }

      leftIndex++;
    }

    // Update the maximum length of the subarray if the length of the current window is larger
    maximumLength = Math.max(maximumLength, rightIndex - leftIndex + 1);
  }

  // Return the maximum length of the subarray
  return maximumLength;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code uses a single for loop that iterates through each element of the array once.
// The space complexity of this code is O(1), which means it uses a constant amount of additional space.
// This is because the code only uses a few variables to store the maximum length, counter, and indices,
// and does not create any additional data structures that grow with the size of the input.
