// https://leetcode.com/problems/summary-ranges/description/
// Array

// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
// That is, each element of nums is covered by exactly one of the ranges,
// and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // Create an empty array to store a list of ranges
  const listOfRanges = [];
  // Create and initialize the start of the range as the first number of the input array
  let start = nums[0];

  // Iterate through the input array using a for loop
  for (let index = 1; index <= nums.length; index++) {
    // If the index reaches the length of the array
    // or the current number minus 1 is not equal to the previous number
    // push the current range since a new range has to begin
    if (index === nums.length || nums[index] - 1 !== nums[index - 1]) {
      if (start === nums[index - 1]) {
        listOfRanges.push(start.toString());
      } else {
        listOfRanges.push(start + "->" + nums[index - 1]);
      }

      // Update the start of the new range as the current number
      if (index < nums.length) {
        start = nums[index];
      }
    }
  }

  // Return the list of ranges
  return listOfRanges;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the function iterates over the array once, and the number of iterations is proportional to the length of the array.
// The space complexity of this code is also O(n).
// This is because the function creates a new array `listOfRanges` to store the results,
// and the size of the new array is proportional to the length of the input array.

// The second try: using nested loops
// -> The first code may be slightly more readable and easier to understand

// const listOfRanges = [];

// for (let index = 0; index < nums.length; index++) {
//   let start = nums[index];

//   while (index + 1 < nums.length && nums[index] + 1 === nums[index + 1]) {
//     index++;
//   }

//   let end = nums[index];

//   listOfRanges.push(start === end ? `${start}` : `${start}->${end}`);
// }

// return listOfRanges;
