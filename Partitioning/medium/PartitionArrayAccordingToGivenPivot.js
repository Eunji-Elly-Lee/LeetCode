// https://leetcode.com/problems/partition-array-according-to-given-pivot/description/
// Array / Two Pointers / Simulation

// You are given a 0-indexed integer array nums and an integer pivot.
// Rearrange nums such that the following conditions are satisfied:
// Every element less than pivot appears before every element greater than pivot.
// Every element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element.
// For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj.
// Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
// Return nums after the rearrangement.

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  // Create three arrays to store the numbers based on the given condition
  const lessArray = [];
  const greaterArray = [];
  const pivotArray = [];

  // Iterate through the input array using a for...of loop
  for (const number of nums) {
    // Push the current number into the correct array after comparison with the pivot
    if (number < pivot) {
      lessArray.push(number);
    } else if (number > pivot) {
      greaterArray.push(number);
    } else {
      pivotArray.push(number);
    }
  }

  // Return nums after rearranging with three arrays
  return (nums = [...lessArray, ...pivotArray, ...greaterArray]);
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element of the `nums` array once.
// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code creates three additional arrays (`lessArray`, `greaterArray`, and `pivotArray`)
// to store the elements that are less than, greater than, and equal to the pivot value.
// The total space used by these arrays is proportional to the length of the input array.
// Additionally, the code creates a new array `nums` to store the sorted elements, which also has a space complexity of O(n).
