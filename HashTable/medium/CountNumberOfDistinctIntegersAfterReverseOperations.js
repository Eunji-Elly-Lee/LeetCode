// https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/
// Array / Hash Table / Math

// You are given an array nums consisting of positive integers.
// You have to take each integer in the array, reverse its digits, and add it to the end of the array.
// You should apply this operation to the original integers in nums.
// Return the number of distinct integers in the final array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  // Create and initialize a variable to store the original length of nums
  const length = nums.length;

  // Iterate through the input nums using a for loop until its original length 
  for (let index = 0; index < length; index++) {
    // Reverse the current number and push it to the end of nums
    const number = parseInt(
      nums[index].toString().split("").reverse().join("")
    );

    nums.push(number);
  }

  // Retuen the number of distinct integers in the final array
  return new Set(nums).size;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element in the array once to reverse the number and add it to the array.
// The space complexity of this code is O(n) as well.
// This is because the code creates a new array with the reversed numbers, which can potentially double the size of the original array.
// Additionally, the code uses a Set to remove duplicates,
// which also requires additional space proportional to the number of unique elements in the array.
