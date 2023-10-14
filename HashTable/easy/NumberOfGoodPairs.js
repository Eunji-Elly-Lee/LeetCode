// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // Create an object to store the frequency of each number
  const numberFrequency = {};
  // Create a counter to count the number of good pairs
  let counter = 0;

  // Iterate through the array using a for...of loop
  for (const number of nums) {
    // If a number is in the frequency object, add the frequency value to the counter,
    // and then increase the frequency
    // If it's not in the object, add the number with a value of 1
    if (numberFrequency[number]) {
      counter += numberFrequency[number];
      numberFrequency[number]++;
    } else {
      numberFrequency[number] = 1;
    }
  }

  // Retrun the counter
  return counter;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element in the array once.
// The space complexity of this code is O(n), where n is the number of unique elements in the input array `nums`.
// This is because the code uses an object `numberFrequency` to store the frequency of each number.
// The space required by this object depends on the number of unique elements in the array.
