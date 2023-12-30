// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
// Array / Math / Greedy / Sorting / Game Theory

// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with the maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.
// Return the maximum number of coins that you can have.

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  // Sort the piles in descending order
  piles.sort((a, b) => b - a);

  // Create and initialize the number of coins to 0
  let numberOfCoins = 0;

  // Iterate through the sorted piles using a for loop, picking every second pile until all three turns are done
  // The highest piles belong to Alice, the second-highest to me, and the lowest to Bob
  for (let index = 1; index < piles.length - piles.length / 3; index += 2) {
    numberOfCoins += piles[index];
  }

  // Return my number of coins
  return numberOfCoins;
};

// The time complexity of this code is O(n log n), where n is the length of the `piles` array.
// This is because the code first sorts the `piles` array using the Array.sort() method, which has a time complexity of O(n log n).
// Then, it iterates over the sorted array in a for loop, which has a time complexity of O(n).
// Therefore, the overall time complexity is dominated by the sorting operation.
// The space complexity of this code is O(1) because it only uses a constant amount of additional space.
// The `piles` array is sorted in-place, so no additional space is required for that operation.
// The `numberOfCoins` variable is a single integer, so it also requires a constant amount of space.
