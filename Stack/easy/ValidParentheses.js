// https://leetcode.com/problems/valid-parentheses/description/
// String / Stack

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Create an empty array to track brackets as a stack
  const stack = [];

  // Iterate through the input string using a for...of loop
  for (const c of s) {
    // If the current character is an open bracket, push it to the stack
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    }

    // If the current character is a close bracket and the last element of the stack is not its open bracket,
    // return false
    if (
      (c === ")" && stack.pop() !== "(") ||
      (c === "}" && stack.pop() !== "{") ||
      (c === "]" && stack.pop() !== "[")
    ) {
      return false;
    }
  }

  // Return true if the stack array is empty, otherwise return false
  return stack.length === 0;
};

// The time complexity of this code is O(n) where n is the length of the input string `s`.
// This is because we iterate through each character in the string once and perform constant time operations for each character.
// The space complexity is also O(n) because in the worst case scenario,
// we could push all opening brackets onto the stack before encountering any closing brackets.
// This would result in the stack having a maximum size of n, where n is the length of the input string.
