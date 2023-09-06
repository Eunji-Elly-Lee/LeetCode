// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (numbers.length === 2) {
    // If there are only two elements in the array, return their indices
    return [1, 2];
  }

  let left = 0;
  let right = numbers.length - 1;

  // Find elements at both ends of the array that sum up to the target value
  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      // If the sum is greater than the target, move the right index to the left
      right--;
    } else {
      // If the sum is less than the target, move the left index to the right
      left++;
    }
  }

  // Return the indices of the found elements
  return [left + 1, right + 1];
};

// The time complexity of this code is O(n), where n is the length of the numbers array.
// This is because the code uses a two-pointer approach to iterate through the array, and in the worst case scenario,
// it may have to iterate through the entire array once.
// The space complexity of this code is O(1) because it only uses a constant amount of additional space to store the left and right pointers.
// The space used does not depend on the size of the input.
