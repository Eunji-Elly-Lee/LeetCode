// https://leetcode.com/problems/valid-sudoku/description/
// Array / Hash Table / Matrix

// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // Iterate through the input board using iteration indices
  for (let x = 0; x < 9; x++) {
    // Create three sets to store each row, column, and sub-box numbers with the current index
    let rowSet = new Set();
    let columnSet = new Set();
    let subBoxSet = new Set();

    // Increase the second index within the range of 0 to 9
    for (let y = 0; y < 9; y++) {
      // If the current number in the row is already in the row set, return false
      // Otherwise, add it to the row set
      if (board[x][y] !== ".") {
        if (rowSet.has(board[x][y])) {
          return false;
        }

        rowSet.add(board[x][y]);
      }

      // If the current number in the column is already in the column set, return false
      // Otherwise, add it to the column set
      if (board[y][x] !== ".") {
        if (columnSet.has(board[y][x])) {
          return false;
        }

        columnSet.add(board[y][x]);
      }

      // Calculate the row and column indices of the current sub-box number
      const subRow = 3 * Math.floor(x / 3) + Math.floor(y / 3);
      const subCol = 3 * (x % 3) + (y % 3);

      // If the current number in the sub-box is already in the sub-box set, return false
      // Otherwise, add it to the sub-box set
      if (board[subRow][subCol] !== ".") {
        if (subBoxSet.has(board[subRow][subCol])) {
          return false;
        }

        subBoxSet.add(board[subRow][subCol]);
      }
    }
  }

  // If the iteration is done without encountering any false conditions, return true
  return true;
};

// The time complexity of this solution is O(1) because the input board is always a 9x9 board,
// so the loops iterate a constant number of times.
// The space complexity is also O(1)
// because the sets used to store the values in each row, column, and sub-box will have a maximum of 9 elements each.
// Therefore, the space used is constant regardless of the input size.
