// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff.
// A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  // Create a set to store the numbers of the input array nums
  const numberSet = new Set(nums);
  // Create a counter to count the number of arithmetic triplets
  let counter = 0;

  // Iterate through the input array nums using a for...of loop
  for (const number of nums) {
    // If a number that is different by diff is in the number set,
    // and also a number that is twice as different by diff is in the number set,
    // increase the counter
    if (numberSet.has(number + diff) && numberSet.has(number + 2 * diff)) {
      counter++;
    }
  }

  // Return the counter
  return counter;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through the array once in the for loop, performing constant time operations for each element.
// The space complexity is O(n) as well.
// This is because the code creates a new Set called `numberSet`, which stores unique elements from the input array.
// And the code uses a `counter` variable to keep track of the number of valid triplets, which requires constant space.
