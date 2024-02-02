// https://leetcode.com/problems/count-complete-subarrays-in-an-array/description/
// Array / Hash Table / Sliding Window

// You are given an array nums consisting of positive integers.
// We call a subarray of an array complete if the following condition is satisfied:
// The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
// Return the number of complete subarrays.
// A subarray is a contiguous non-empty part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  // Create and initialize variables for the number of distinct elements, the number map,
  // the number of complete subarrays, and the left index
  const numberOfDistincts = new Set(nums).size;
  const numberMap = new Map();
  let numberOfSubstrings = 0;
  let leftIndex = 0;

  // Iterate through the input array using a for loop with the right index
  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    // If the current number is in the map, update the value by adding 1
    // Otherwise, set the current number with a value of 1
    if (numberMap.has(nums[rightIndex])) {
      numberMap.set(nums[rightIndex], numberMap.get(nums[rightIndex]) + 1);
    } else {
      numberMap.set(nums[rightIndex], 1);
    }

    // Move the left index to find the subarray following the given condition
    while (numberMap.size === numberOfDistincts) {
      numberMap.set(nums[leftIndex], numberMap.get(nums[leftIndex]) - 1);

      if (numberMap.get(nums[leftIndex]) === 0) {
        numberMap.delete(nums[leftIndex]);
      }

      leftIndex++;
    }

    // Add the length of the current valid subarrays to the number of complete subarrays
    numberOfSubstrings += leftIndex;
  }

  // Return the number of complete subarrays
  return numberOfSubstrings;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code uses a sliding window approach to iterate through the array, and the while loop inside the for loop runs at most n times.
// The space complexity of this code is O(n), where n is the number of distinct elements in the input array `nums`.
// This is because the code uses a Set and a Map to keep track of the distinct elements and their counts.
// The size of these data structures will be at most n.
