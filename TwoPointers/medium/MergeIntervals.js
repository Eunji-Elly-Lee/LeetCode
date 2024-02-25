// https://leetcode.com/problems/merge-intervals/description/
// Array / Sorting

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Sort the input array with each starting element in ascending order
  intervals.sort((a, b) => a[0] - b[0]);
  // Create an empty array to store the merged array of non-overlapping intervals
  const merged = [];

  // Iterate through the sorted input array using a for loop
  for (let index = 0; index < intervals.length; index++) {
    // Create and initialize the start and end points as the current interval elements
    let start = intervals[index][0];
    let end = intervals[index][1];

    // Move the index until the next index is less than the length of the input array
    // and the end point is greater than or equal to the starting element of the next interval
    while (index + 1 < intervals.length && end >= intervals[index + 1][0]) {
      index++;
      // Update the end point if the ending element of the current interval is greater than the current end point
      end = Math.max(end, intervals[index][1]);
    }

    // Push the start and end points to the merged array as the merged interval
    merged.push([start, end]);
  }

  // Return the merged array of non-overlapping intervals
  return merged;
};

// This code has a time complexity of O(n log n) due to the sorting step, where n is the number of intervals.
// The sorting step dominates the overall time complexity.
// The space complexity is O(n), where n is the number of intervals, as it uses additional space to store the merged intervals.
