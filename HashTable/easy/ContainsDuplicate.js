// https://leetcode.com/problems/contains-duplicate/description/
// Array / Hash Table / Sorting

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Create a set to store unique numbers from the input array
  const numberSet = new Set(nums);

  // Return true if the size of the set is not the same as that of the input array
  return nums.length !== numberSet.size;
};

// The time complexity of this code is O(n), where n is the length of the `nums` array.
// This is because the code creates a new Set from the `nums` array,
// which has a time complexity of O(n) since it needs to iterate over each element in the array.
// The space complexity of this code is O(n) as well.
// This is because the Set stores unique elements from the `nums` array,
// so in the worst case scenario, the Set will contain all the elements from the nums array, resulting in a space complexity of O(n).
