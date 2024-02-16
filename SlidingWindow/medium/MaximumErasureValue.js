// https://leetcode.com/problems/maximum-erasure-value/description/
// Array / Hash Table / Sliding Window

// You are given an array of positive integers nums and want to erase a subarray containing unique elements.
// The score you get by erasing the subarray is equal to the sum of its elements.
// Return the maximum score you can get by erasing exactly one subarray.
// An array b is called to be a subarray of a if it forms a contiguous subsequence of a,
// that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  // Create and initialize an empty set to store unique numbers from the input array
  const numberSet = new Set();
  // Create and initialize variables for the maximum score, the subarray sum, and the left index
  let maxScore = 0;
  let sum = 0;
  let leftIndex = 0;

  // Iterate through the input array using a for loop with the right index
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    // If the current number at the right index is already in the set,
    // shift the left index after subtracting the number at the left index from the sum and deleting it from the set
    // until the number at the right index is not in the set
    while (numberSet.has(nums[rightIndex])) {
      sum -= nums[leftIndex];
      numberSet.delete(nums[leftIndex]);
      leftIndex++;
    }

    // Update the subarray sum and set using the current number, and the maximum score
    sum += nums[rightIndex];
    numberSet.add(nums[rightIndex]);
    maxScore = Math.max(maxScore, sum);
  }

  // Return the maximum score
  return maxScore;
};

// The time complexity of this algorithm is O(n), where n is the length of the input array `nums`.
// This is because we iterate through the array once, performing constant time operations for each element.
// The space complexity is O(n), where n is the length of the input array `nums`.
// This is because we use a set to keep track of unique numbers, and the size of the set can be at most n.
