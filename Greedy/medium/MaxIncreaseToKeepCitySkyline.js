// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
// Array / Greedy / Matrix

// There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism.
// You are given a 0-indexed n x n integer matrix grid
// where grid[r][c] represents the height of the building located in the block at row r and column c.
// A city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance.
// The skyline from each cardinal direction north, east, south, and west may be different.
// We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building).
// The height of a 0-height building can also be increased.
// However, increasing the height of a building should not affect the city's skyline from any cardinal direction.
// Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  // Create empty arrays to store the maximum heights from each cardinal direction
  const rowMaximums = [];
  const columnMaximums = [];

  // Find and store the maximum height of buildings for each row and column
  for (let x = 0; x < grid.length; x++) {
    let rowMaximum = 0;
    let columnMaximum = 0;

    for (let y = 0; y < grid.length; y++) {
      rowMaximum = Math.max(rowMaximum, grid[x][y]);
      columnMaximum = Math.max(columnMaximum, grid[y][x]);
    }

    rowMaximums.push(rowMaximum);
    columnMaximums.push(columnMaximum);
  }

  // Create and initialize the total sum to 0
  let sum = 0;

  // Iterate through the input grid using a nested for loop
  // to calculate the total sum that the height of the buildings can be increased by
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      sum += Math.min(rowMaximums[x], columnMaximums[y]) - grid[x][y];
    }
  }

  // Return the total sum
  return sum;
};

// The time complexity of this code is O(n^2), where n is the length of the `grid`.
// This is because there are two nested loops that iterate over the `grid`, resulting in a total of n^2 iterations.
// The space complexity of this code is O(n), where n is the length of the `grid`.
// This is because the `rowMaximums` and `columnMaximums` arrays have a length of n, and the `sum` variable requires constant space.
