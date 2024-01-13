// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// Array / Two Pointers / Simulation

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  // Create and initialize a new array to store the rearranged elements and each pointer
  const rearrangedArray = new Array(nums.length);
  let positivePointer = 0;
  let negativePointer = 1;

  // Iterate through the input array using a for...of loop
  for (const number of nums) {
    // If the current number is positive, push the number at the positive pointer index of the new array and update the positive pointer
    // Otherwise, push the number at the negative pointer index of the new array and update the negative pointer
    if (number > 0) {
      rearrangedArray[positivePointer] = number;
      positivePointer += 2;
    } else {
      rearrangedArray[negativePointer] = number;
      negativePointer += 2;
    }
  }

  // Return the rearranged array
  return rearrangedArray;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element in the `nums` array once.
// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because a new array `rearrangedArray` is created with the same length as the input array.
