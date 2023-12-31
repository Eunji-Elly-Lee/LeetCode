// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
// Array / Two Pointers / Sorting

// Given a 0-indexed integer array nums of length n and an integer target,
// return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  // Create and initialize pointers and the number of pairs to 0
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let numberOfPairs = 0;

  // Iterate through the sorted array using a while loop
  while (leftPointer < rightPointer) {
    // If the sum of the current pair is less than the target,
    // it means all pairs with the current pointers are valid
    // Update the number of pairs and move the left pointer to the right
    if (nums[leftPointer] + nums[rightPointer] < target) {
      numberOfPairs += rightPointer - leftPointer;
      leftPointer++;
    } else {
      // Otherwise, move the right pointer to the left
      rightPointer--;
    }
  }

  // Return the number of pairs
  return numberOfPairs;
};

// The time complexity of this code is O(nlogn), where n is the length of the input array `nums`.
// This is because the code first sorts the array using the sort() method, which has a time complexity of O(nlogn).
// Then, it iterates through the sorted array once, which takes O(n) time.
// The space complexity of this code is O(1)
// because it only uses a constant amount of extra space to store the pointers and the `numberOfPairs` variable.
// The space used does not depend on the size of the input array.
