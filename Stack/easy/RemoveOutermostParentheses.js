// https://leetcode.com/problems/remove-outermost-parentheses/description/
// String / Stack

// A valid parentheses string is either empty "", "(" + A + ")", or A + B,
// where A and B are valid parentheses strings, and + represents string concatenation.
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty,
// and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk,
// where Pi are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  // Create an empty array to store parentheses and use it as a stack
  const stack = [];
  // Create and initialize an answer string to store the string after removing outermost parentheses
  let answer = "";

  // Iterate through the input string using a for...of loop
  for (const p of s) {
    // If the current parenthesis is "("
    if (p === "(") {
      // If the stack is not empty, add the current parenthesis to the answer string
      // since it means the current parenthesis is not the part of the outermost parentheses
      if (stack.length > 0) {
        answer += p;
      }

      // Push the current parenthesis onto the stack
      stack.push(p);
    } else {
      // If the current parenthesis is ")", remove the last element from the stack
      stack.pop();

      // If the stack is not empty after removing the last element from the stack array,
      // add the current parenthesis to the answer string
      // since it means the current parenthesis is not the part of the outermost parentheses
      if (stack.length > 0) {
        answer += p;
      }
    }
  }

  // Return the final answer string
  return answer;
};

// The time complexity of this solution is O(n), where n is the length of the input string `s`.
// This is because we iterate through each character in the string once.
// The space complexity is O(1)
// because the `stack` size is always bounded by half the length of the string `s` for any valid parentheses string.
