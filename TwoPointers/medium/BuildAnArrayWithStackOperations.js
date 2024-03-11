// https://leetcode.com/problems/build-an-array-with-stack-operations/description/
// Array / Stack / Simulation

// You are given an integer array target and an integer n.
// You have an empty stack with the two following operations:
// "Push": pushes an integer to the top of the stack.
// "Pop": removes the integer on the top of the stack.
// You also have a stream of the integers in the range [1, n].
// Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to target.
// You should follow the following rules:
// If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
// If the stack is not empty, pop the integer at the top of the stack.
// If, at any moment, the elements in the stack (from the bottom to the top) are equal to target,
// do not read new integers from the stream and do not do more operations on the stack.
// Return the stack operations needed to build target following the mentioned rules.
// If there are multiple valid answers, return any of them.

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  // Create an empty array to serve as a stack
  const stack = [];
  // Create and initialize a pointer to track the target array
  let pointer = 0;

  // Iterate through the number stream in the range from 1 to n
  for (let number = 1; number <= n; number++) {
    // Push the "Push" operation onto the stack
    stack.push("Push");

    // If the current number is equal to the current value of the target, move the pointer to the next value
    // Otherwise, push the "Pop" operation onto the stack
    if (number === target[pointer]) {
      pointer++;

      // If the current position is equal to the length of the target, break out of the loop      
      if (pointer === target.length) {
        break;
      }
    } else {
      stack.push("Pop");
    }
  }

  // Return the final stack
  return stack;
};

// The time complexity of this solution is O(n), where n is the value of the input parameter `n`.
// This is because we iterate through all numbers from 1 to `n` in the for loop.
// The space complexity of this solution is also O(n),
// as the size of the stack can grow up to n elements in the worst case scenario where all numbers from 1 to n are pushed onto the stack.
