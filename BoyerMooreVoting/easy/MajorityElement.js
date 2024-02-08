// https://leetcode.com/problems/majority-element/
// Array / Hash Table / Divide and Conquer / Sorting / Counting

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Create a potential majority element
  let majority = null;
  // Create a counter to count the occurrences of each number
  let counter = 0;

  // Iterate through the array using a for...of loop
  for (const number of nums) {
    if (counter === 0) {
      // If the counter is equal to zero, update the potential majority to the current number,
      // and then, increase the counter
      majority = number;
      counter++;
    } else if (majority === number) {
      // If the current number is equal to the potential majority, increase the counter
      counter++;
    } else {
      // Otherwise, decrease the counter
      counter--;
    }
  }

  // Return the majority element
  return majority;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element in the array once.
// The space complexity of this code is O(1),
// because it only uses a constant amount of additional space to store the majority element and the counter.
