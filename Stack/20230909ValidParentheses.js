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
  if (s.length === 1) {
    // If the length is 1, the bracket can't be closed
    return false;
  }

  // Create a empty array to store the stack
  const stackArray = [];

  for (let index = 0; index < s.length; index++) {
    if (
      stackArray.length === 0 ||
      s.charAt(index) === "(" ||
      s.charAt(index) === "{" ||
      s.charAt(index) === "["
    ) {
      // If the stack is empty or the current character is an opening bracket, push it onto the stack
      stackArray.push(s.charAt(index));
    } else {
      if (
        (s.charAt(index) === ")" &&
          stackArray[stackArray.length - 1] === "(") ||
        (s.charAt(index) === "}" &&
          stackArray[stackArray.length - 1] === "{") ||
        (s.charAt(index) === "]" && stackArray[stackArray.length - 1] === "[")
      ) {
        // If the character is a closing bracket, compare it with the last bracket on the stack,
        // and remove it from the stack if they match
        stackArray.pop();
      }
    }
  }

  // If the stack is empty, return true because it means all brackets are closed
  return stackArray.length === 0;
};

// The time complexity of this code is O(n), where n is the length of the input string s.
// This is because the code iterates through the string once in the for loop, performing constant time operations for each character.
// The space complexity of this code is O(n), where n is the length of the input string s.
// This is because the code uses a stack (implemented as an array) to store opening brackets.
// In the worst case scenario, where all characters in the string are opening brackets, the stack will have a length of n.
