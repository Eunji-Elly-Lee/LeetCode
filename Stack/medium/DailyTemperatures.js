// https://leetcode.com/problems/daily-temperatures/description/
// Array / Stack / Monotonic Stack

// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // Create and initialize an answer array
  const answer = new Array(temperatures.length).fill(0);
  // Create an empty array to track the indices of the warmer temperatures as a stack
  const stack = [];

  // Iterate through the input array using a for loop starting from the last element
  for (let index = temperatures.length - 1; index >= 0; index--) {
    // Remove indices from the stack until finding a warmer temperature
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[index]
    ) {
      stack.pop();
    }

    // If a warmer temperature is found
    // update the answer at the current index by subtracting the index of the warmer temperature
    if (stack.length !== 0) {
      answer[index] = stack[stack.length - 1] - index;
    }

    // Push the current index onto the stack
    stack.push(index);
  }

  // Return the final answer
  return answer;
};

// The time complexity of this solution is O(n), where n is the number of temperatures in the input array.
// This is because we iterate through the temperatures array only once.
// The space complexity is O(n) as well, as we use a stack data structure that can potentially store all n elements of the temperatures array.
