// https://leetcode.com/problems/contains-duplicate-ii/description/
// Array / Hash Table / Sliding Window

// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // Create an empty set to store unique numbers within the k-range window
  const numberSet = new Set();

  // Create and initialize the left index of the sliding window to 0
  let leftIndex = 0;

  // Iterate through the input array using a for loop with the right index of the sliding window
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    // If the right index exceeds the k-range window,
    // update the set by removing the number at the left index and move the left index
    // This is done to maintain the size of the sliding window.
    if (rightIndex > k) {
      numberSet.delete(nums[leftIndex]);
      leftIndex++;
    }

    // If the current number is already in the set, return true
    // Otherwise, add the current number to the set
    if (numberSet.has(nums[rightIndex])) {
      return true;
    } else {
      numberSet.add(nums[rightIndex]);
    }
  }

  // Return false since the given conditions were not met throughout the entire iteration
  return false;
};

// The time complexity of this solution is O(n), where n is the length of the input array `nums`.
// This is because we iterate through the array once, performing constant time operations for each element.
// The space complexity is O(k), where k is the value of the input parameter `k`.
// This is because we use a set to store at most k elements at a time.
