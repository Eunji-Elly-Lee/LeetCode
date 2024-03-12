// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
// Array / Math / Stack

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression.
// Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // Create an empty array to serve as a stack
  const stack = [];

  // Iterate through the input array using a for...of loop
  for (const token of tokens) {
    // If the current token is not a number, calculate two numbers from the stack
    // Otherwise, push the token onto the stack as a number
    if (isNaN(token)) {
      const number2 = stack.pop();
      const number1 = stack.pop();

      if (token === "+") {
        stack.push(number1 + number2);
      } else if (token === "-") {
        stack.push(number1 - number2);
      } else if (token === "*") {
        stack.push(number1 * number2);
      } else {
        stack.push(Math.trunc(number1 / number2));
      }
    } else {
      stack.push(Number(token));
    }
  }

  // Return the final answer from the stack
  return stack.pop();
};

// The time complexity of this solution is O(n), where n is the number of tokens in the input array.
// This is because we iterate through each token in the array exactly once.
// The space complexity is also O(n) because we use a stack to store the numbers as we process the tokens.
// The size of the stack can grow up to the size of the input array in the worst case scenario.
