// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // If the height array has less than 3 elements, it's impossible to trap water
  if (height.length <= 2) {
    return 0;
  }

  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let leftMaxHeight = 0;
  let rightMaxHeight = 0;
  let sum = 0;

  while (leftIndex < rightIndex) {
    if (height[leftIndex] < height[rightIndex]) {
      // Move towards the lower side by comparing the heights of the current positions
      if (height[leftIndex] > leftMaxHeight) {
        // Update leftMaxHeight while moving from left to right
        leftMaxHeight = height[leftIndex];
      } else {
        sum += leftMaxHeight - height[leftIndex];
      }

      leftIndex++;
    } else {
      if (height[rightIndex] > rightMaxHeight) {
        // Update rightMaxHeight while moving from right to left
        rightMaxHeight = height[rightIndex];
      } else {
        sum += rightMaxHeight - height[rightIndex];
      }

      rightIndex--;
    }
  }

  return sum;
};

// The time complexity of this code is O(n), where n is the length of the input array 'height'.
// This is because the code uses a while loop that iterates through the array from both ends, and the loop runs until the left and right pointers meet.
// Since each iteration of the loop either increments the left pointer or decrements the right pointer, the loop will run for at most n iterations.
// The space complexity of this code is O(1), as it only uses a constant amount of additional space to store the variables.
// The space used does not depend on the size of the input array.
