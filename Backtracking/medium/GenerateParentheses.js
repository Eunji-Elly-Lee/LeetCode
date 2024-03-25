// https://leetcode.com/problems/generate-parentheses/description/
// String / Dynamic Programming / Backtracking

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Create an empty array to store all combinations of well-formed parentheses
  const combinations = [];

  // Define a function to generate the combinations
  const generateCombinations = (parentheses, open, close) => {
    // If the current parentheses are completed, push them to the combinations array
    if (parentheses.length === 2 * n) {
      combinations.push(parentheses);
      return;
    }

    // If the number of open parentheses is less than the input number,
    // continue generating combinations with updated parentheses and an increased number of open parentheses
    if (open < n) {
      generateCombinations(parentheses + "(", open + 1, close);
    }

    // When the number of close parentheses is less than the number of open parentheses,
    // update the parentheses and continue generating combinations with an increased number of close parentheses
    if (close < open) {
      generateCombinations(parentheses + ")", open, close + 1);
    }
  };

  // Start generating combinations with the initial condition, which is an empty string of parentheses
  generateCombinations("", 0, 0);

  // Return the final combinations
  return combinations;
};

// The time complexity of this solution is O(4^n / sqrt(n)), where n is the input number.
// This is because for each position in the output string,
// we have 2 choices - either to add an opening parenthesis or a closing parenthesis.
// This results in a branching factor of 2 at each position, leading to a total of 2^(2n) possible combinations.
// However, not all combinations are valid,
// so the actual number of valid combinations is the nth Catalan number, which is approximately 4^n / sqrt(n).
// The space complexity of this solution is O(n), where n is the input number.
// This is because we are using recursion to generate all valid combinations of parentheses,
// and the depth of the recursion tree is limited by the input number n.
// Additionally, the combinations array will store all valid combinations, which can have a maximum of 2n characters in each combination.
