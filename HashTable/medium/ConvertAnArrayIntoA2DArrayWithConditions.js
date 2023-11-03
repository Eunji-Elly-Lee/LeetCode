// You are given an integer array nums.
// You need to create a 2D array from nums satisfying the following conditions:
// The 2D array should contain only the elements of the array nums.
// Each row in the 2D array contains distinct integers.
// The number of rows in the 2D array should be minimal.
// Return the resulting array.
// If there are multiple answers, return any of them.
// Note that the 2D array can have a different number of elements on each row.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  // Create an object to store the frequency of each number
  const numberFrequency = {};
  // Create an object to store the new arrays which will be rows
  // The number of rows is the same as the frequency of numbers
  const newArrays = {};

  // Iterate through the array using a for...of loop
  for (const number of nums) {
    // If a number is in the frequency object, increase its frequency,
    // otherwise, add the number with a value of 1
    if (numberFrequency[number]) {
      numberFrequency[number]++;
    } else {
      numberFrequency[number] = 1;
    }

    // If the frequency of the number isn't in the new array object,
    // add the frequency with an empty array as its value
    if (!(numberFrequency[number] in newArrays)) {
      newArrays[numberFrequency[number]] = [];
    }

    // Push the number to the array of the object's current frequency
    newArrays[numberFrequency[number]].push(number);
  }

  // Return the arrays from the new array object
  return Object.values(newArrays);
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element in the `nums` array once.
// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code creates two objects: `numberFrequency` and `newArrays`,
// which can potentially store all the unique elements in the `nums` array.
// Therefore, the space required is proportional to the number of unique elements in the `nums` array.
