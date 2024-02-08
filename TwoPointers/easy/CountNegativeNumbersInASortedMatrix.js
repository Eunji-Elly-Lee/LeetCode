// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
// Array / Binary Search / Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
// return the number of negative numbers in grid.
// Follow up: Could you find an O(n + m) solution?

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  // Create and initialize the variables to store the counter, the current row and column
  let counter = 0;
  let row = 0;
  let column = grid[0].length - 1;

  // Iterate through the input grid using a while loop, starting from the top-right corner and moving either left or down
  while (row < grid.length && column >= 0) {
    // If the current number is negative, it means all numbers under the current column are also negative
    // Update the counter and move to the left in the same row
    // Otherwise, move to the next row
    if (grid[row][column] < 0) {
      counter += grid.length - row;
      column--;
    } else {
      row++;
    }
  }

  // Return the counter
  return counter;
};

// The time complexity of this code is O(m + n), where m is the number of rows and n is the number of columns.
// This is because in the worst case scenario, we will iterate through each row and each column once.
// The space complexity is O(1) because we are using a constant amount of extra space to store the `counter`, `row`, and `column` variables.

// The time complexity of my initial code is O(n*m), where n is the number of rows in the `grid` and m is the number of columns in the `grid`.
// This is because we iterate through each element in the `grid` once.
// The space complexity of my initial code is O(1)
// because we only use a constant amount of extra space to store the `counter` and the `isPositive` variables.
// We do not use any additional data structures that grow with the input size.

// Used Brute Force algorithm

// var countNegatives = function (grid) {
//   let counter = 0;

//   for (const row of grid) {
//     let isPositive = false;

//     while (!isPositive) {
//       if (row.pop() < 0) {
//         counter++;
//       } else {
//         isPositive = true;
//       }
//     }
//   }

//   return counter;
// };

// The time complexity of my second code is O(n * log(m)), where n is the number of rows in the `grid` and m is the number of columns in the `grid`.
// This is because for each row, we perform a binary search to find the index of the first negative number, which takes O(log(m)) time.
// Since we perform this operation for each row, the overall time complexity is O(n * log(m)).
// The space complexity of my second code is O(1)
// because we only use a constant amount of extra space to store the `counter` variable and the indices for the binary search.
// The input grid is not modified, so no additional space is required.

// Used Binary Search algorithm

// var countNegatives = function (grid) {
//   let counter = 0;

//   for (const row of grid) {
//     let leftIndex = 0;
//     let rightIndex = row.length - 1;

//     while (leftIndex <= rightIndex) {
//       const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//       if (row[middleIndex] >= 0) {
//         leftIndex = middleIndex + 1;
//       } else {
//         rightIndex = middleIndex - 1;
//       }
//     }

//     if (leftIndex < row.length) {
//       counter += row.length - leftIndex;
//     }
//   }

//   return counter;
// };
