// https://leetcode.com/problems/largest-local-values-in-a-matrix/description/
// Array / Matrix

// You are given an n x n integer matrix grid.
// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
// Return the generated matrix.

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  // Create an empty array to store the largest values in every contiguous 3 x 3 matrix in the grid
  const maxLocal = [];

  // Iterate through the input array using a for loop
  for (let x = 1; x < grid.length - 1; x++) {
    // Create an empty array to store the largest values in the current row within every 3 columns
    const rowMaximums = [];

    // Find and push the largest value among the nine elements within each 3 x 3 subgrid
    // into the array for the largest values of the current row
    for (let y = 1; y < grid[x].length - 1; y++) {
      rowMaximums.push(
        Math.max(
          grid[x - 1][y - 1],
          grid[x - 1][y],
          grid[x - 1][y + 1],
          grid[x][y - 1],
          grid[x][y],
          grid[x][y + 1],
          grid[x + 1][y - 1],
          grid[x + 1][y],
          grid[x + 1][y + 1]
        )
      );
    }

    // Push the array containing the largest values of the current row into the main array for largest values
    maxLocal.push(rowMaximums);
  }

  // Return the array containing the largest values
  return maxLocal;
};

// The time complexity of this code is O(n^2), where n is the length of the `grid`.
// This is because there are two nested loops that iterate through the `grid`, resulting in a total of n^2 iterations.
// The space complexity of this code is also O(n^2), because the `maxLocal` array is created with dimensions equal to the size of the `grid`.
// Each element in the `grid` is stored in the `maxLocal` array, resulting in a total of n^2 elements.
