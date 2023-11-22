// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Array / Two Pointers

// Given an integer array nums sorted in non-decreasing order,
// remove some duplicates in-place such that each unique element appears at most twice.
// The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages,
// you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array.
// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // If the array has one element, return 1
  if (nums.length === 1) {
    return 1;
  }

  // Create a variable to indicate the count of elements after removing duplicates
  let k = 2;

  // Iterate through the nums array using a for loop
  for (let index = 2; index < nums.length; index++) {
    // If the current number is different from the previous two numbers, move this to the front of the array
    // And then, increase k
    if (nums[index] > nums[k - 2]) {
      nums[k] = nums[index];
      k++;
    }
  }

  // Return k
  return k;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through the array once in the for loop, comparing each element to the previous two elements.
// The space complexity is O(1) because the code only uses a constant amount of extra space to store the variable `k`.
