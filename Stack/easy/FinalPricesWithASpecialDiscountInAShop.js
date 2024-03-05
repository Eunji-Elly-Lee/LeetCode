// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/
// Array / Stack / Monotonic Stack

// You are given an integer array prices where prices[i] is the price of the ith item in a shop.
// There is a special discount for items in the shop.
// If you buy the ith item, then you will receive a discount equivalent to prices[j]
// where j is the minimum index such that j > i and prices[j] <= prices[i].
// Otherwise, you will not receive any discount at all.
// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop,
// considering the special discount.

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  // Create and initialize a stack array for tracking indices and an answer array for the final price
  const stack = [];
  const answer = [...prices];

  // Iterate through the input array using a for loop
  for (let index = prices.length - 1; index >= 0; index--) {
    // Pop indices from the stack until a discount price is found or the stack is empty
    while (
      stack.length > 0 &&
      prices[index] < prices[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    // If a discount price is found, update the current price
    if (stack.length > 0) {
      answer[index] -= prices[stack[stack.length - 1]];
    }

    // Push the current index to the stack
    stack.push(index);
  }

  // Return the final price
  return answer;
};

// The time complexity of this solution is O(n), where n is the number of elements in the `prices` array.
// This is because we iterate through the prices array once to calculate the final prices.
// The space complexity is O(n) as well, as we use a stack data structure to keep track of indices of elements in the `prices` array.
// The size of the stack can be at most n, where n is the number of elements in the `prices` array.
