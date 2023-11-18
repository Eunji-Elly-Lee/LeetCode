// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Create a variable to indicate the count of unique elements
  let k = 1;

  // Iterate through the nums array using a for loop
  for (let index = 1; index < nums.length; index++) {
    // If the current number is different from the previous number, move this to the front of the array
    // And then, increase k
    if (nums[index] !== nums[index - 1]) {
      nums[k] = nums[index];
      k++;
    }
  }

  // Return k
  return k;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through the array once in the for loop, comparing each element to the previous element.
// The number of iterations is directly proportional to the length of the array.
// The space complexity of this code is O(1), which means it uses a constant amount of additional space.
// This is because the code only uses a single variable `k` to keep track of the new length of the array.
// It does not create any additional data structures that grow with the size of the input.
