// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return -1;
};
