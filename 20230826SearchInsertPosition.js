// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
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

  return min;
};
