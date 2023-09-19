// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
// The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // The minimum and maximun possible banana eating speed
  let minimumSpeed = 1;
  let maximumSpeed = Math.max(...piles);

  // Adjust banana eating speed
  while (minimumSpeed < maximumSpeed) {
    const middleSpeed = Math.floor((minimumSpeed + maximumSpeed) / 2);
    // Hours required for Koko to eat all the bananas
    let hoursNeeded = 0;

    // Calculate hours needed to eat all piles
    for (const pile of piles) {
      hoursNeeded += Math.ceil(pile / middleSpeed);
    }

    if (hoursNeeded <= h) {
      // If Koko can finish eating all bananas in less than h hours,
      // reduce maximumSpeed to explore lower speeds
      maximumSpeed = middleSpeed;
    } else {
      // If Koko needs more than h hours to finish,
      // increase minimumSpeed to try higher speeds
      minimumSpeed = middleSpeed + 1;
    }
  }

  // Return the minimum required banana eating speed
  return minimumSpeed;
};

// The time complexity of this code is O(n log m), where n is the length of the "piles" array and m is the maximum value in the "piles" array.
// This is because the code uses binary search to find the minimum speed, which takes O(log m) time.
// Within each iteration of the binary search, the code iterates over all the piles to calculate the hours needed, which takes O(n) time.
// Therefore, the overall time complexity is O(n log m).
// The space complexity of this code is O(1) because it only uses a constant amount of additional space to store the minimum and maximum speeds,
// the middle speed, and the hours needed. The space used does not depend on the size of the input.
