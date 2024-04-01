// https://leetcode.com/problems/largest-rectangle-in-histogram/description/
// Array / Stack / Monotonic Stack

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
// return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // Create an empty array to track the indices of the histogram's bar height as a stack
  const stack = [];
  // Create and initialize the area of the largest rectangle
  let largestRectangle = 0;

  // Iterate through the input array using a for loop
  for (let index = 0; index <= heights.length; index++) {
    // When the current bar is smaller than previous bars or when reaching the last bar,
    // calculate the area of previous bars and update the area of the largest rectangle
    while (
      stack.length > 0 &&
      (index === heights.length ||
        heights[index] < heights[stack[stack.length - 1]])
    ) {
      const height = heights[stack.pop()];
      const width =
        stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
      largestRectangle = Math.max(largestRectangle, height * width);
    }

    // Push the current index onto the stack
    stack.push(index);
  }

  // Return the final area of the largest rectangle
  return largestRectangle;
};

// The time complexity of this solution is O(n) because we iterate through the `heights` array once.
// The space complexity is O(n) because we use a stack data structure that can potentially store all elements of the `heights` array.
