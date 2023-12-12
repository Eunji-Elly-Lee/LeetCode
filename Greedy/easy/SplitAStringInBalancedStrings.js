// https://leetcode.com/problems/split-a-string-in-balanced-strings/
// String / Greedy / Counting

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  // Create and initialize the counter and number of substrings variables to 0
  let counter = 0;
  let numberOfSubstrings = 0;

  // Iterate through the input string s using a for...of loop
  for (const letter of s) {
    // If the current letter is "L", increase the counter
    // Otherwise, decrease the counter
    if (letter === "L") {
      counter++;
    } else {
      counter--;
    }

    // If the current value of the counter is 0, increase the number of substrings
    if (counter === 0) {
      numberOfSubstrings++;
    }
  }

  // Return the number of substrings
  return numberOfSubstrings;
};

// The time complexity of this code is O(n), where n is the length of the string `s`.
// This is because the code iterates through each character of the string once in the for loop.
// The space complexity of this code is O(1)
// because it only uses a constant amount of additional space to store the `counter` and `numberOfSubstrings` variables.
// The space used does not depend on the size of the input string `s`.
