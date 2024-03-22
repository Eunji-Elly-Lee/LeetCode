// https://leetcode.com/problems/container-with-most-water/description/
// Array / Two Pointers / Greedy

// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Create and initialize variables to store the maximum amount of water and two pointers
  let maxAmount = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  // Iterate through the input array using a while loop with the pointers
  while (leftPointer < rightPointer) {
    // Update the maximum amount of water if the current amount is greater than it
    maxAmount = Math.max(
      maxAmount,
      Math.min(height[leftPointer], height[rightPointer]) *
        (rightPointer - leftPointer)
    );

    // Move the shorter pointer towards the middle to encounter a taller line and create a container with a larger area
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  // Return the final maximum amount of water
  return maxAmount;
};

// The time complexity of this solution is O(n), where n is the number of elements in the `height` array.
// This is because we are iterating through the array once using two pointers,
// and the while loop will terminate when the two pointers meet in the middle.
// The space complexity of this solution is O(1) because we are using a constant amount of extra space regardless of the size of the input.
// We are only storing a few variables like `maxAmount`, `leftPointer`, and `rightPointer`.
