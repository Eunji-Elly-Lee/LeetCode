// https://leetcode.com/problems/search-a-2d-matrix/description/
// Array / Binary Search / Matrix

// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Get the numbers of rows and columns
  const rows = matrix.length;
  const columns = matrix[0].length;
  // Create two variables to store and track left and right pointers
  let left = 0;
  let right = rows * columns - 1;

  // Iterate through the input array using a while loop
  while (left <= right) {
    // Calculate the middle index between the left and right pointers
    const middle = Math.floor((left + right) / 2);
    // Get the middle number from the input matrix
    const middleNumber = matrix[Math.floor(middle / columns)][middle % columns];

    // Update pointers by comparing the middle number
    // If the target has been found, return true
    if (middleNumber < target) {
      left = middle + 1;
    } else if (middleNumber > target) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  // Return false because the target hasn't been found
  return false;
};

// The time complexity of this solution is O(log(m*n)), where m is the number of rows in the matrix and n is the number of columns.
//This is because we are performing a binary search on a 1D array of length m*n.
// The space complexity is O(1) because we are not using any extra space that scales with the input size.

// The time complexity of my initial code is O(n log m), where n is the number of rows in the matrix and m is the number of elements in each row.
// This is because for each row, we perform a binary search which has a time complexity of O(log m).
// The space complexity is O(1) because we are not using any extra space that scales with the input size.

// var searchMatrix = function (matrix, target) {
//   for (const row of matrix) {
//     if (target > row[0] && target < row[row.length - 1]) {
//       let left = 0;
//       let right = row.length - 1;

//       while (left <= right) {
//         const middle = Math.floor((left + right) / 2);

//         if (row[middle] < target) {
//           left = middle + 1;
//         } else if (row[middle] > target) {
//           right = middle - 1;
//         } else {
//           return true;
//         }
//       }
//     }
//   }

//   return false;
// };
