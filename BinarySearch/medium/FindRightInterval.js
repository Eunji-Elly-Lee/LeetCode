// https://leetcode.com/problems/find-right-interval/description/
// Array / Binary Search / Sorting

// You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.
// The right interval for an interval i is an interval j such that startj >= endi and startj is minimized.
// Note that i may equal j.
// Return an array of right interval indices for each interval i.
// If no right interval exists for interval i, then put -1 at index i.

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  // Create empty arrays to store pairs of each start and its index, and right interval indices
  const starts = [];
  const indices = [];

  // Iterate through the input array using a for loop to create pairs of each start and its index
  for (let index = 0; index < intervals.length; index++) {
    starts.push([intervals[index][0], index]);
  }

  // Sort the array of start-index pairs based on each start value
  starts.sort((a, b) => a[0] - b[0]);

  // Iterate through the input array using a for...of loop
  for (const interval of intervals) {
    // Create and initialize variables for binary search and the index of the right interval
    let low = 0;
    let high = starts.length - 1;
    let startIndex = -1;

    // Perform binary search
    while (low <= high) {
      let middle = Math.floor((low + high) / 2);

      if (starts[middle][0] >= interval[1]) {
        // If the current start is greater than or equal to the current end of the interval,
        // update the index of the right interval
        startIndex = starts[middle][1];
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    // Push the index of the right interval
    indices.push(startIndex);
  }

  // Return the indices of the right intervals
  return indices;
};

// The time complexity of this solution is O(n log n) for sorting the `starts` array
// and O(log n) for each interval to find the right interval using binary search.
// Therefore, the overall time complexity is O(n log n).
// The space complexity is O(n) to store the `starts` array and `indices` array.
