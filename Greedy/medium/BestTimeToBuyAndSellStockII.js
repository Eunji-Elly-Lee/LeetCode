// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Array / Dynamic Programming / Greedy

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Create and initialize the maximum profit to 0
  let maximumProfit = 0;

  // Iterate through the input array using a for loop
  for (let index = 1; index < prices.length; index++) {
    // Calculate the price difference between the prices of the current day and the previous day
    const priceDifference = prices[index] - prices[index - 1];

    // If the price difference is positive, add it to the maximun profit
    if (priceDifference > 0) {
      maximumProfit += priceDifference;
    }
  }

  // Return the maximum profit
  return maximumProfit;
};

// The time complexity of this code is O(n), where n is the length of the `prices` array.
// This is because the code iterates through the prices array once in the for loop.
// The space complexity of this code is O(1), as it only uses a constant amount of additional space to store the `maximumProfit` variable.
// The space used does not depend on the size of the input.
