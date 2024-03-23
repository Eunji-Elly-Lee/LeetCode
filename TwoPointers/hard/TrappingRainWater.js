// https://leetcode.com/problems/trapping-rain-water/description/
// Array / Two Pointers / Dynamic Programming / Stack / Monotonic Stack

// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Create and initialize variables to store the total amount of trapped water, two pointers, and maximum bars of each side  
  let waterAmount = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMaxBar = 0;
  let rightMaxBar = 0;

  // Iterate through the input array using a while loop with the pointers
  while (leftPointer < rightPointer) {
    // If the current left bar is smaller than the current right bar, proceed with the process on the left side
    // Otherwise, proceed with the process on the right side
    if (height[leftPointer] < height[rightPointer]) {
      // If the current left bar is taller than the maximum left bar, update the maximum left bar
      // Otherwise, calculate the amount of trapped water and add it to the total amount      
      if (height[leftPointer] > leftMaxBar) {
        leftMaxBar = height[leftPointer];
      } else {
        waterAmount += leftMaxBar - height[leftPointer];
      }

      // Move the left pointer to the right
      leftPointer++;
    } else {
      // If the current right bar is taller than the maximum right bar, update the maximum right bar
      // Otherwise, calculate the amount of trapped water and add it to the total amount
      if (height[rightPointer] > rightMaxBar) {
        rightMaxBar = height[rightPointer];
      } else {
        waterAmount += rightMaxBar - height[rightPointer];
      }

      // Move the right pointer to the left
      rightPointer--;
    }
  }

  // Return the total amount of trapped water
  return waterAmount;
};

// The time complexity of this solution is O(n) because we are iterating through the height array only once with two pointers.
// The space complexity is O(1) because we are using a constant amount of extra space regardless of the input size.
