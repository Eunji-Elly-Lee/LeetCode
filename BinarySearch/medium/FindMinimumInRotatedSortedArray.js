// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
// Array / Binary Search

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // Create two variables to store and track the left and right pointers
  let left = 0;
  let right = nums.length - 1;

  // Iterate through the input array using a while loop
  while (left < right) {
    // Calculate the middle index between the left and right pointers
    const middle = Math.floor((left + right) / 2);

    // If the middle number is greater than the right number, update the left pointer to the next index after the middle
    // because it means the minimum number is on the right side from the middle index
    // Otherwise, update the right pointer to the middle index
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  // Return the final number at the left pointer
  return nums[left];
};

// The time complexity of this solution is O(log n)
// because we are using binary search to find the minimum element in the sorted rotated array.
// The space complexity is O(1) because we are not using any extra space that grows with the input size.
