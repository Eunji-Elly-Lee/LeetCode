// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
// Array / Two Pointers / Binary Search

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.
// Your solution must use only constant extra space.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // Create and initialize two pointers to track each number on the left and right sides
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  // Iterate through the input array using a while loop with the pointers
  while (leftPointer < rightPointer) {
    // Calculate the sum with the current numbers
    const sum = numbers[leftPointer] + numbers[rightPointer];

    // If the sum is less than the target, move the left pointer to the right
    // If the sum is greater than the target, move the right pointer to the left
    // Otherwise, the sum is equal to the target, return the pointers increased by 1, as an array
    if (sum < target) {
      leftPointer++;
    } else if (sum > target) {
      rightPointer--;
    } else {
      return [leftPointer + 1, rightPointer + 1];
    }
  }
};

// The time complexity of this solution is O(n) because we are iterating through the array once using two pointers.
// The space complexity is O(1) because we are using a constant amount of extra space regardless of the input size.
