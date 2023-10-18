// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // Sort the input array
  const sortedNums = [...nums].sort((a, b) => a - b);
  // Create an object to store the tracking position of each number in the sorted array
  const numberTracker = {};

  // Iterate through the sorted array using a for loop
  for (let index = 0; index < sortedNums.length; index++) {
    // If a number is not in the tracker object, add the number with its index
    if (!(sortedNums[index] in numberTracker)) {
      numberTracker[sortedNums[index]] = index;
    }
  }

  // Create an array to store the number of smaller numbers
  const numberOfSmallers = [];

  // Iterate through the input array using a for...of loop
  for (const number of nums) {
    // Push the tracking position of the number into the array of the number of smaller numbers
    numberOfSmallers.push(numberTracker[number]);
  }

  // Return the array of the number of smaller numbers
  return numberOfSmallers;
};

// The time complexity of this code is O(n log n), where n is the length of the input array `nums`.
// This is because the code first sorts the array using the sort() method, which has a time complexity of O(n log n).
// Then, it iterates over each array once, which has a time complexity of O(n).
// Therefore, the overall time complexity is O(n log n).

// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code creates a new `sortedNums` array, `numberTracker` object, and a new `numberOfSmallers` array.
// Therefore, the overall space complexity is O(n).
