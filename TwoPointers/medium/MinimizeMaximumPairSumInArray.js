// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
// Array / Two Pointers / Greedy / Sorting

// The pair sum of a pair (a,b) is equal to a + b.
// The maximum pair sum is the largest pair sum in a list of pairs.
// For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and
// The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  // Sort the input number array in ascending order
  nums.sort((a, b) => a - b);

  // Create and initialize pointers and the maximum sum to 0
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let maximumSum = 0;

  // Iterate through the sorted array using a while loop
  while (leftPointer < rightPointer) {
    // Update the maximum sum to be the greater of the current pair sum or the current maximum sum
    // Minimize the sum by pairing the lowest and largest numbers
    maximumSum = Math.max(maximumSum, nums[leftPointer] + nums[rightPointer]);

    // Move each pointer in opposite directions
    leftPointer++;
    rightPointer--;
  }

  // Return the maximum sum
  return maximumSum;
};

// The time complexity of this code is O(n log n), where n is the length of the input array `nums`.
// This is because the code first sorts the array using the sort() method, which has a time complexity of O(n log n).
// Then, the while loop iterates through the sorted array once, which takes O(n) time.
// The space complexity of this code is O(1)
// because it only uses a constant amount of extra space to store the pointers and the `maximumSum` variable.
// The space used does not depend on the size of the input array.
