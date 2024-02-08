// https://leetcode.com/problems/matrix-diagonal-sum/description/
// Array / Matrix

// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal
// and all the elements on the secondary diagonal that are not part of the primary diagonal.

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  // Create and initialize the sum of the matrix diagonals as 0
  let sum = 0;

  // Iterate through the input array using a for loop
  for (let index = 0; index < mat.length; index++) {
    // Add the number from the primary diagonal
    sum += mat[index][index];

    // If the current index is not the same as the center of the matrix diagonals,
    // add the number from the secondary diagonal
    if (index !== mat.length - 1 - index) {
      sum += mat[index][mat.length - 1 - index];
    }
  }

  // Return the sum of the matrix diagonals
  return sum;
};

// The time complexity of this code is O(n), where n is the length of the matrix `mat`.
// This is because the code iterates over each row of the matrix once, performing constant time operations for each element.
// The space complexity of this code is O(1), as it only uses a constant amount of additional space to store the `sum` variable.
// The space used does not depend on the size of the input matrix.
