// https://leetcode.com/problems/count-number-of-nice-subarrays/description/
// Array / Hash Table / Math / Sliding Window

// Given an array of integers nums and an integer k.
// A continuous subarray is called nice if there are k odd numbers on it.
// Return the number of nice sub-arrays.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  // Create and initialize counters for odd numbers and the number of nice subarrays
  let oddCounter = 0;
  let numberOfNice = 0;

  // Create and initialize the prefix sum array to store the count of odd numbers up to each position
  // The array length is set to be 1 larger than the length of the input array
  // for an empty subarray where no numbers are selected before starting
  // Set prefixSum[0] to 1 since the empty subarray has no odd numbers
  let prefixSum = new Array(nums.length + 1).fill(0);
  prefixSum[0] = 1;

  // Iterate through the input array using a for...of loop
  for (const number of nums) {
    // If the current number is add, increase the odd number counter
    if (number % 2 === 1) {
      oddCounter++;
    }

    // If the current count of odd numbers is greater than or equal to k,
    // update the number of nice subarrays
    // by adding the prefix sum value where k is subtracted from the number of odd numbers encountered so far
    if (oddCounter >= k) {
      numberOfNice += prefixSum[oddCounter - k];
    }

    // Update prefix sum array with the count of odd numbers up to the current position
    prefixSum[oddCounter]++;
  }

  // Return the number of nice subarrays
  return numberOfNice;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element of the array once in the for loop.
// The space complexity is O(n) as well.
// This is because the code creates a `prefixSum` array of length nums.length + 1,
// which takes up additional space proportional to the length of the input array.
