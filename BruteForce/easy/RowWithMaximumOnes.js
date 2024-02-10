// https://leetcode.com/problems/row-with-maximum-ones/description/
// Array / Matrix

// Given a m x n binary matrix mat,
// find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.
// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.
// Return an array containing the index of the row, and the number of ones in it.

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  // Create and initialize variables to store the index of the row and the number of ones
  let indexOfRow = 0;
  let numberOfOnes = 0;

  // Iterate through each row of the input matrix using a for loop
  for (let row = 0; row < mat.length; row++) {
    // Create and initialize a counter to store the number of ones in the current row
    let counter = 0;

    // Iterate through each number of the current row using a for loop
    for (let column = 0; column < mat[row].length; column++) {
      // If the current number is 1, increase the counter
      if (mat[row][column] === 1) {
        counter++;
      }
    }

    // If the counter is greater then the number of ones, update the index of the row and the number of ones
    if (counter > numberOfOnes) {
      indexOfRow = row;
      numberOfOnes = counter;
    }
  }

  // Return the index of the row and the number of ones as an array
  return [indexOfRow, numberOfOnes];
};

// The time complexity of this code is O(n * m), where n is the number of rows and m is the number of columns in the matrix.
// This is because we have nested loops that iterate over each element in the matrix.
// The space complexity of this code is O(1)
// because we are only using a constant amount of extra space to store the variables `indexOfRow` and `numberOfOnes`.
// The space used does not depend on the size of the input matrix.
