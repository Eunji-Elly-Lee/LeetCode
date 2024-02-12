// https://leetcode.com/problems/find-missing-and-repeated-values/description/
// Array / Hash Table / Math / Matrix

// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
// Each integer appears exactly once except a which appears twice and b which is missing.
// The task is to find the repeating and missing numbers a and b.
// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  // Create and initialize an empty set to store the numbers of the input grid and a variable for the repeating number
  const numberSet = new Set();
  let repeating = 0;

  // Iterate through the input grid using a for...of loop
  for (const row of grid) {
    for (const column of row) {
      // If the current number is already in the set, update the repeating number
      // Otherwise, add the current number to the set
      if (numberSet.has(column)) {
        repeating = column;
      } else {
        numberSet.add(column);
      }
    }
  }

  // Iterate through the set using a for loop with the numbers in the input grid
  for (let number = 1; number <= grid.length * grid.length; number++) {
    // If the current number is not in the set, return it along with the repeating number as an array
    if (!numberSet.has(number)) {
      return [repeating, number];
    }
  }
};

// The time complexity of this function is O(n^2), where n is the length of the `grid`.
// This is due to the presence of a nested loop within the `grid` to find the repeating value and add all values to the set.
// After that, we iterate over the `numberSet` to identify the missing value,
// the length of which would be n * n, where n represents the length of the `grid`.
// The space complexity of this function is O(n^2), where n is the length of the `grid`.
// This is because we use a set to store the values in the `grid` which has values in the range [1, n2].
