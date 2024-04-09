// https://leetcode.com/problems/binary-search/description/
// Array / Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Create two variables to store and track left and right pointers
  let left = 0;
  let right = nums.length - 1;

  // Iterate through the input array using a while loop
  while (left <= right) {
    // Calculate the middle index between the left and right pointers
    let middle = Math.floor((left + right) / 2);

    // Update pointers by comparing the number at the middle index
    // If the target has been found, return the middle index
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  // Return -1 because the target hasn't been found
  return -1;
};

// The time complexity of this binary search algorithm is O(log n) because the search space is halved in each iteration.
// The space complexity is O(1) because only a constant amount of extra space is used regardless of the input size.
