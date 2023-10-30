// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
// The value of |x| is defined as:
// x if x >= 0.
// -x if x < 0.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  // Create an object to store the frequency of each number
  const numberFrequency = {};
  // Create a counter to count the number of valid pairs
  let counter = 0;

  // Iterate through the array using a for...of loop
  for (const number of nums) {
    // If a number is in the frequency object, increase its frequency,
    // otherwise, add the number with a value of 1
    if (numberFrequency[number]) {
      numberFrequency[number]++;
    } else {
      numberFrequency[number] = 1;
    }

    // If a number that is different by k is in the frequency object, add the frequency value to the counter
    if (number - k in numberFrequency) {
      counter += numberFrequency[number - k];
    }

    if (number + k in numberFrequency) {
      counter += numberFrequency[number + k];
    }
  }

  // Return the counter
  return counter;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element in the array once.
// The space complexity of this code is O(n), where n is the number of unique elements in the input array `nums`.
// This is because the code uses an object `numberFrequency` to store the frequency of each number.
// The space required by this object depends on the number of unique elements in the array.
