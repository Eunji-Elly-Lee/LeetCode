// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
// String / Stack

// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:
// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
// Given a VPS represented as string s, return the nesting depth of s.

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  // Create an empty array to store parentheses and use it as a stack
  const stack = [];
  // Create and initialize the nesting depth
  let depth = 0;

  // Iterate through the input string using a for...of loop
  for (const c of s) {
    // If the current character is "(", push it onto the stack
    if (c === "(") {
      stack.push(c);
    }

    // If the current character is ")", update the nesting depth and remove the last element from the stack
    if (c === ")") {
      depth = Math.max(depth, stack.length);
      stack.pop();
    }
  }

  // Return the final nesting depth
  return depth;
};

// The time complexity of this solution is O(n), where n is the length of the input string `s`.
// This is because we iterate through each character in the string once.
// The space complexity is O(1)
// because the `stack` size is at most half the length of the string `s` for any valid parentheses string,
// even in the worst-case scenario.
