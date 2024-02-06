// https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
// Array / Sorting / Heap (Priority Queue) / Matrix / Simulation

// You are given an m x n matrix grid consisting of positive integers.
// Perform the following operation until grid becomes empty:
// Delete the element with the greatest value from each row.
// If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.
// Return the answer after performing the operations described above.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  // Sort each row in ascending order
  for (let row of grid) {
    row.sort((a, b) => a - b);
  }

  // Create and initialize the answer as 0
  let answer = 0;

  // Iterate through the sorted grid using a while loop until removing all columns in every row
  while (grid[0].length > 0) {
    // Create and initialize the greatest number in the current iteration as 0
    let greatestNumber = 0;

    // Iterate through the sorted grid using a for...of loop
    for (const row of grid) {
      // Update the greatest number if the last number in the current row is greater than it
      greatestNumber = Math.max(greatestNumber, row.pop());
    }

    // Add the greatest number to the answer
    answer += greatestNumber;
  }

  // Return the answer
  return answer;
};

// The time complexity of this algorithm is O(n*m*log(m)),
// where n is the number of rows in the `grid` and m is the number of columns in the `grid`.
// This is because for each row, we sort the elements in that row, which takes O(m*log(m)) time.
// Since there are n rows, the overall time complexity is O(n*m*log(m)).
// The space complexity of this algorithm is O(1) because we are not using any additional space that grows with the input size.
// We are modifying the grid in place and using a constant amount of additional space for the variables.
