// https://leetcode.com/problems/subrectangle-queries/description/
// Array / Design / Matrix

// Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the constructor
// and supports two methods:
// 1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)
// Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right coordinate is (row2,col2).
// 2. getValue(int row, int col)
// Returns the current value of the coordinate (row,col) from the rectangle.

/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  // Create a matrix to store the given rectangle
  this.matrix = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  // Iterate through the matrix using a nested for loop
  // The iteration range is from row1 to row2 and from col1 to col2
  for (let row = row1; row <= row2; row++) {
    for (let column = col1; column <= col2; column++) {
      // Update the current number with the given new value
      this.matrix[row][column] = newValue;
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  // Return the number located at the given row and column
  return this.matrix[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

// The time complexity of the SubrectangleQueries constructor is O(1) because it simply initializes the matrix.
// The time complexity of the updateSubrectangle method is O((row2 - row1 + 1) * (col2 - col1 + 1))
// because it iterates over a subrectangle and updates each element with a new value.
// The time complexity of the getValue method is O(1) because it simply returns the value at the specified row and column.
// The space complexity of the SubrectangleQueries class is O(1) because it only stores the matrix and a few variables for method arguments.
