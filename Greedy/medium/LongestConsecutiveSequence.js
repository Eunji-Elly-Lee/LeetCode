// https://leetcode.com/problems/longest-consecutive-sequence/description/
// Array / Hash Table / Union Find

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // If the input array has 0 or 1 element, the longest consecutive sequence is its length
  if (nums.length <= 1) {
    return nums.length;
  }

  // Create and initialize a set to store unique numbers from the input array
  // and a variable to track the longest consecutive sequence length
  // Using a set enables efficient removal of duplicates and fast lookups
  const numberSet = new Set(nums);
  let longestSequence = 0;

  // Iterate through each unique number in the set using a for...of loop
  for (const number of numberSet) {
    // If the number - 1 exists in the set, skip it as it's not the start of a sequence
    if (numberSet.has(number - 1)) {
      continue;
    }

    // Create and initialize variables to track the current consecutive sequence
    let currentSequence = 1;
    let nextNumber = number + 1;

    // Extend the current sequence as long as consecutive numbers exist in the set
    while (numberSet.has(nextNumber)) {
      currentSequence++;
      nextNumber++;
    }

    // Update the longest consecutive sequence
    longestSequence = Math.max(longestSequence, currentSequence);
  }

  // Return the final longest consecutive sequence
  return longestSequence;
};

// This code has a time complexity of O(n) as it iterates through each element of the array once.
// The space complexity is O(n) due to the additional Set data structure used to store all unique numbers from the input array.
