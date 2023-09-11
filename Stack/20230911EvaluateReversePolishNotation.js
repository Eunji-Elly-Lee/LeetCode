// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
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
  if (tokens.length === 1) {
    // If the length is 1, return the number
    return tokens[0];
  }

  // Create an empty array to store numbers as stack structure
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      // If the token is a number, push it onto the stack
      stack.push(token);
    } else {
      const secondOperand = stack.pop();
      const firstOpenrand = stack.pop();

      // If the token is an operator, perform the operation on two numbers and push the result onto the stack
      if (token === "+") {
        stack.push(Number(firstOpenrand) + Number(secondOperand));
      } else if (token === "-") {
        stack.push(Number(firstOpenrand) - Number(secondOperand));
      } else if (token === "*") {
        stack.push(Number(firstOpenrand) * Number(secondOperand));
      } else {
        stack.push(Math.trunc(Number(firstOpenrand) / Number(secondOperand)));
      }
    }
  }

  // The final result is at the top of the stack
  return stack.pop();
};

// The time complexity of this code is O(n), where n is the number of tokens in the input array.
// This is because the code iterates through each token in the array once.
// The space complexity of this code is O(n), where n is the number of tokens in the input array.
// This is because the code uses a stack to store the numbers, and the size of the stack can grow up to the number of tokens in the array.
