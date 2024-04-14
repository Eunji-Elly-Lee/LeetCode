// https://leetcode.com/problems/koko-eating-bananas/description/
// Array / Binary Search

// Koko loves to eat bananas.
// There are n piles of bananas, the ith pile has piles[i] bananas.
// The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k.
// Each hour, she chooses some pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // Initialize the minimum bananas-per-hour eating speed as 1 (Koko can eat at least 1 banana per hour)
  let minimumSpeed = 1;
  // Initialize the maximum bananas-per-hour eating speed as the maximum number of bananas in the piles
  let maximumSpeed = Math.max(...piles);

  // Iterate the calculation until the minimum speed is less than the maximum speed
  while (minimumSpeed < maximumSpeed) {
    // Calculate the middle speed
    const middleSpeed = Math.floor((minimumSpeed + maximumSpeed) / 2);
    // Create and initialize the needed hours to eat all bananas
    let neededHours = 0;

    // Iterate through the input piles array by calculating the needed hours using the middle speed
    // (Adding each hour per pile to eat all bananas in that pile)
    for (const pile of piles) {
      neededHours += Math.ceil(pile / middleSpeed);
    }

    // If the needed hours is less than or equal to the input h, update the maximum speed as the middle speed
    // Otherwise, update the minimum speed as the number greater than the middle speed by 1
    if (neededHours <= h) {
      maximumSpeed = middleSpeed;
    } else {
      minimumSpeed = middleSpeed + 1;
    }
  }

  // Return the final minimum speed
  return minimumSpeed;
};

// The time complexity of this solution is O(n log m), where n is the number of piles and m is the maximum number of bananas in a pile.
// This is because we are using binary search to find the minimum eating speed, which has a time complexity of O(log m),
// and we iterate through all the piles to calculate the total hours needed, which takes O(n) time.
// The space complexity is O(1) because we are using a constant amount of extra space, regardless of the input size.
