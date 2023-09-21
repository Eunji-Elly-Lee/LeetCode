// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Create and initialize the left and right indices
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Calculate the middle index
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      // If the middle element is equal to the target, return the middle index
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      // If the left half is sorted
      if (nums[left] <= target && target < nums[middle]) {
        // The target is in the left half
        right = middle - 1;
      } else {
        // The target is in the right half
        left = middle + 1;
      }
    } else {
      // If the right half is sorted
      if (nums[middle] < target && target <= nums[right]) {
        // The target is in the right half
        left = middle + 1;
      } else {
        // The target is in the left half
        right = middle - 1;
      }
    }
  }

  // If the target is not found, return -1
  return -1;
};

// The time complexity of this code is O(log n) because it uses binary search to find the target element.
// In each iteration of the while loop, the search space is divided in half, resulting in a logarithmic time complexity.
// The space complexity is O(1) because the code only uses a constant amount of extra space for the variables left, right, and mid.
