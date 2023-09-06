// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
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
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    // Create a Set to store the numbers in each row, column, and sub-box to check duplicates
    let rowSet = new Set();
    let columnSet = new Set();
    let subBoxSet = new Set();

    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      // Get the value of the current cell in the row being iterated
      const rowCell = board[rowIndex][columnIndex];
      // Get the value of the current cell in the column being iterated
      const columnCell = board[columnIndex][rowIndex];
      // Calculate the indices for the current cell in the 3x3 sub-box
      const subBoxRowIndex =
        3 * Math.floor(rowIndex / 3) + Math.floor(columnIndex / 3);
      const subBoxColumnIndex = 3 * (rowIndex % 3) + (columnIndex % 3);
      // Get the value of the current cell in the corresponding sub-box
      const subBoxCell = board[subBoxRowIndex][subBoxColumnIndex];

      if (rowCell !== ".") {
        if (rowSet.has(rowCell)) {
          // If there is a duplicate number in the row, return false
          return false;
        }

        rowSet.add(rowCell);
      }

      if (columnCell !== ".") {
        // If there is a duplicate number in the column, return false
        if (columnSet.has(columnCell)) {
          return false;
        }

        columnSet.add(columnCell);
      }

      if (subBoxCell !== ".") {
        // If there is a duplicate number in the sub-box, return false
        if (subBoxSet.has(subBoxCell)) {
          return false;
        }

        subBoxSet.add(subBoxCell);
      }
    }
  }

  return true;
};
