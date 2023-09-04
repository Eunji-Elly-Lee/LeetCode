// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Create a new Set from the array to remove duplicate elements
  // A JavaScript Set is a collection of unique values
  const newSet = new Set(nums);

  // If the size of the set is different from the length of the array, return true
  // Otherwise return false
  return newSet.size !== nums.length;
};

// The time complexity of this function is O(n), where n is the length of the input array nums.
// This is because creating a new Set from the array takes O(n) time, and comparing the size of the set to the length of the array also takes O(n) time.
// The space complexity is O(n) as well. This is because the newSet variable stores a set containing all the unique elements from the input array nums.
// In the worst case scenario, where all elements in nums are unique, the set will have a size of n, requiring O(n) space.
