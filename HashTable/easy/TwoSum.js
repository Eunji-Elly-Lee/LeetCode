// https://leetcode.com/problems/two-sum/description/
// Array / Hash Table

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a map to store numbers and their indices
  const map = new Map();

  // Iterate through the input array using a for loop
  for (let index = 0; index < nums.length; index++) {
    // Create and initialize an answer by calculating with the target and the current number
    const answer = target - nums[index];

    // If the answer is in the map, return the answer array with the current index and the answer index
    if (map.has(answer)) {
      return [index, map.get(answer)];
    }

    // Set the current number and its index into the map
    map.set(nums[index], index);
  }
};

// The time complexity of this solution is O(n) because we iterate through the array of numbers once,
// where n is the number of elements in the array.
// The space complexity is also O(n) because we use a map data structure to store the numbers and their indices.
// This map can potentially store all the elements in the array, leading to a linear space complexity.
