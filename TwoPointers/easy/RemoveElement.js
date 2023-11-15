// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Create a variable to indicate the count of numbers not equal to val
  let k = 0;

  // Iterate through the nums array using a for loop
  for (let index = 0; index < nums.length; index++) {
    // If the current number is not equal to val, move this to the front of the array
    // And then, increase k
    if (nums[index] !== val) {
      nums[k] = nums[index];
      k++;
    }
  }

  // Return k
  return k;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element of the array once in the for loop.
// The space complexity of this code is O(1) because it uses a constant amount of extra space.
// The variable `k` is used to keep track of the new length of the array, but it does not depend on the size of the input array.
