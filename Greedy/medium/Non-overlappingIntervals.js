// https://leetcode.com/problems/non-overlapping-intervals/description/
// Array / Dynamic Programming / Greedy / Sorting

// Given an array of intervals intervals where intervals[i] = [starti, endi],
// return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // Sort the input array based on each interval's ending in ascending order
  intervals.sort((a, b) => a[1] - b[1]);
  // Create and initialize a counter to store the number of intervals needed to be removed
  let counter = 0;

  // Iterate through the sorted array using a for loop
  for (let index = 0; index < intervals.length; index++) {
    // Create and initialize a standard ending as the current interval's ending
    const ending = intervals[index][1];

    // Move the index until the standard ending is greater than the next interval's starting,
    // and increase the counter
    while (intervals[index + 1] && ending > intervals[index + 1][0]) {
      index++;
      counter++;
    }
  }

  // Return the total counter
  return counter;
};

// The time complexity of this code is O(n log n) due to the sorting of the intervals array.
// The space complexity is O(1) because the extra space used is constant regardless of the input size.
