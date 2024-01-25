// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/
// Array / Dynamic Programming / Sliding Window

// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's in the resulting array.
// Return 0 if there is no such subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  // Create and initialize variables for the size of the longest subarray, the counter for zeros, and the left index
  let longestSubarray = 0;
  let zeroCounter = 0;
  let leftIndex = 0;

  // Iterate through the input array using a for loop with the right index
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    // If the current number is 0, increase the zero counter
    if (nums[rightIndex] === 0) {
      zeroCounter++;
    }

    // Shrink the window if the number of zeros exceeds 1 to keep only one 0 in the window  
    while (zeroCounter > 1) {
      if (nums[leftIndex] === 0) {
        zeroCounter--;
      }

      leftIndex++;
    }

    // Update the size of the longest subarray if the length of the current window is larger
    longestSubarray = Math.max(longestSubarray, rightIndex - leftIndex);
  }

  // If the size of the longest subarray is equal to the length of the input array,
  // it means all numbers are 1, so delete one number
  if (longestSubarray === nums.length) {
    longestSubarray -= 1;
  }

  // Return the size of the longest subarray
  return longestSubarray;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because we iterate through the array once using a for loop.
// The space complexity of this code is O(1),
// as we only use a constant amount of extra space to store the variables `longestSubarray`, `zeroCounter`, and `leftIndex`.
