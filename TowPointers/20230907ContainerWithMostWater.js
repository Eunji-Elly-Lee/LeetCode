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
  let maximumWater = 0;
  let left = 0;
  let right = height.length - 1;

  // Move towards the center, calculating the area of the rectangle from the far end of the graph
  while (left < right) {
    const currentWidth = right - left;
    // Find the smaller of the two vertical lines to contain water
    const currentHeight = Math.min(height[left], height[right]);

    // Update to the maximum amount of water
    maximumWater = Math.max(maximumWater, currentWidth * currentHeight);

    // Move the pointer toward the lower vertical line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximumWater;
};

// The time complexity of this code is O(n), where n is the length of the input array 'height'.
// This is because the code uses a while loop that iterates through the array once,
// comparing the heights at the left and right pointers and updating the maximum water accordingly.
// The loop will run until the left and right pointers meet, which will take at most n iterations.
// The space complexity of this code is O(1),
// as it only uses a constant amount of additional space to store the maximum water, left pointer, and right pointer.
// The space used does not depend on the size of the input array.
