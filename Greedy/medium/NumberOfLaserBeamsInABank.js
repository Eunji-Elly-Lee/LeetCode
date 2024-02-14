// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/
// Array / Math / String / Matrix

// Anti-theft security devices are activated inside a bank.
// You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix.
// bank[i] represents the ith row, consisting of '0's and '1's.
// '0' means the cell is empty, while'1' means the cell has a security device.
// There is one laser beam between any two security devices if both conditions are met:
// The two devices are located on two different rows: r1 and r2, where r1 < r2.
// For each row i where r1 < i < r2, there are no security devices in the ith row.
// Laser beams are independent, i.e., one beam does not interfere nor join with another.
// Return the total number of laser beams in the bank.

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  // Create and initialize the number of laser beams and the number of the previous ones as 0
  let numberOfBeams = 0;
  let preOnes = 0;

  // Iterate through each row of the input array using a for...of loop
  for (const row of bank) {
    // Create and initialize the number of the current ones
    let ones = 0;

    // Iterate through each column of the current row using a for...of loop
    for (const col of row) {
      // If the current character is "1", increase the number of the current ones
      if (col === "1") {
        ones++;
      }
    }

    // If the number of the current ones is not 0,
    // update the number of laser beams by multiplying the numbers of the previous ones and the current ones
    // And update the number of the previous ones to the number of the current ones
    if (ones !== 0) {
      numberOfBeams += preOnes * ones;
      preOnes = ones;
    }
  }

  // Return the total number of laser beams
  return numberOfBeams;
};

// The time complexity of this algorithm is O(n*m),
// where n is the number of rows in the bank and m is the number of columns in each row.
// This is because we iterate through each element in the bank matrix once.
// The space complexity of this algorithm is O(1)
// because we only use a constant amount of extra space to store the number of beams and the number of ones in the previous row.
