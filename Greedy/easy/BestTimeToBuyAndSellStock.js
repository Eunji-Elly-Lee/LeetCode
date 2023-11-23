// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Array / Dynamic Programming

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Create and initialize the minimum price to the first price of the array
  let minimumPrice = prices[0];
  // Create and initialize the maximum profit to 0
  let maximumProfit = 0;

  // Iterate through the input array using a for loop
  for (let index = 0; index < prices.length; index++) {
    // If the current price is smaller then the minimum price, update the minimum price as the current price
    // Else if the difference between the current price and the minimum price is greater than the maximum profit,
    // update the maximum profit
    if (prices[index] < minimumPrice) {
      minimumPrice = prices[index];
    } else if (prices[index] - minimumPrice > maximumProfit) {
      maximumProfit = prices[index] - minimumPrice;
    }
  }

  // Return the maximum profit
  return maximumProfit;
};

// The time complexity of this code is O(n), where n is the length of the `prices` array.
// This is because the code iterates through the prices array once in the for loop.
// The space complexity of this code is O(1),
// as it only uses a constant amount of additional space to store the `minimumPrice` and `maximumProfit` variables.
