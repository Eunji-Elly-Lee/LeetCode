// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Array / Binary Search

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function,
// nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target,
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Create two variables to store and track the left and right pointers
  let left = 0;
  let right = nums.length - 1;

  // Iterate through the input array using a while loop
  while (left <= right) {
    // Calculate the middle index between the left and right pointers
    const middle = Math.floor((left + right) / 2);

    // If the number at the middle index is equal to the target, return the middle
    if (nums[middle] === target) {
      return middle;
    }

    // If the left number is less than or equal to the middle number, and also the target is between the left and middle numbers,
    // update the right pointer to the next index before the middle
    // If the left number is greater than the middle number, and also the target is not between the middle and right numbers,
    // update the right pointer to the next index before the middle
    // Otherwise update the left pointer to the next index after the middle
    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (nums[middle] < target && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  // Return -1 if the target number has not been found
  return -1;
};

// The time complexity of this algorithm is O(log n) because it uses binary search to find the target element in the sorted rotated array.
// The space complexity is O(1) because the algorithm uses a constant amount of extra space regardless of the input size.
