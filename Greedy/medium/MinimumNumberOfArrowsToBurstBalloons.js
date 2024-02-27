// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
// Array / Greedy / Sorting

// There are some spherical balloons taped onto a flat wall that represents the XY-plane.
// The balloons are represented as a 2D integer array points
// where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend.
// You do not know the exact y-coordinates of the balloons.
// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis.
// A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend.
// There is no limit to the number of arrows that can be shot.
// A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // Sort the input array based on each pointer's ending in ascending order
  points.sort((a, b) => a[1] - b[1]);
  // Create and initialize a counter to store the number of arrows
  let counter = 0;

  // Iterate through the sorted array using a for loop
  for (let index = 0; index < points.length; index++) {
    // Create and initialize a shot as the current point's ending
    const shot = points[index][1];

    // Move the index until the shot is greater than or equal to the next point's starting
    while (index + 1 < points.length && shot >= points[index + 1][0]) {
      index++;
    }

    // Increase the counter
    counter++;
  }

  // Return the total counter
  return counter;
};

// The time complexity is O(n log n) due to the sorting step, where n is the number of points.
// The space complexity is O(1) as the algorithm uses a constant amount of extra space regardless of the input size,
// indicating that it is an in-place algorithm with low space requirements.
