// https://leetcode.com/problems/insert-interval/description/
// Array

// You are given an array of non-overlapping intervals `intervals`
// where intervals[i] = [starti, endi] represent the start and the end of the ith interval
// and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals
// such that intervals is still sorted in ascending order by starti
// and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // Iterate through the input intervals array using a for loop
  for (let index = 0; index < intervals.length; index++) {
    // Check if the current interval exists and its ending is greater than or equal to the starting of the new interval
    if (intervals[index] && intervals[index][1] >= newInterval[0]) {
      // Create and initialize the insert index as the current index
      let insertIndex = index;

      // Iterate through the intervals array from the current index
      // until the ending of the new interval is greater than or equal to any starting number
      for (
        insertIndex;
        insertIndex < intervals.length &&
        newInterval[1] >= intervals[insertIndex][0];
        insertIndex++
      ) {
        // Update the starting and ending of the new interval based on overlapping intervals
        newInterval[0] = Math.min(newInterval[0], intervals[insertIndex][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[insertIndex][1]);
      }

      // Insert the new interval at the current index and remove the merged intervals,
      // then return the updated intervals array
      intervals.splice(index, insertIndex - index, newInterval);
      return intervals;
    }
  }

  // If the insertion process is not executed,
  // push the new interval to the intervals array and return it
  intervals.push(newInterval);
  return intervals;
};

// This code has a time complexity of O(n) and a space complexity of O(1), where n is the number of intervals in the input array.
// The time complexity is linear because the code iterates through the `intervals` once.
// The space complexity is constant as the algorithm modifies the input array in place without using additional data structures
// that scale with the input size.
