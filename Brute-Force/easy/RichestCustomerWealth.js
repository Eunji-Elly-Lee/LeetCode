// https://leetcode.com/problems/richest-customer-wealth/description/
// Array / Matrix

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  // Create and initialize the maximum wealth as 0
  let maximumWealth = 0;

  // Iterate through the input array using a for...of loop and calculate the amount of money for each customer
  for (const customer of accounts) {
    let wealth = 0;

    for (const money of customer) {
      wealth += money;
    }

    // Update the maximum wealth if the current customer's amount of money is greater than the current maximum wealth
    maximumWealth = Math.max(maximumWealth, wealth);
  }

  // Return the maximum wealth
  return maximumWealth;
};

// The time complexity of this code is O(n*m), where n is the number of customers and m is the number of accounts per customer.
// This is because we iterate through each customer and then iterate through each account within that customer.
// The space complexity of this code is O(1) because we only use a constant amount of extra space to store the maximum wealth.
