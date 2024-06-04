// https://leetcode.com/problems/find-the-duplicate-number/description/
// Array / Two Pointers / Binary Search / Bit Manipulation

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // Create and initialize slow and fast pointers to the start of the array
  // The numbers in the input array will serve as the pointers to the next numbers
  let slow = nums[0];
  let fast = nums[0];

  // Iterate through the input array using a while loop until the two pointers meet
  // This indicates that there is a cycle in the array
  while (true) {
    // Move the fast pointer by 2 steps and the slow pointer by 1 step
    fast = nums[nums[fast]];
    slow = nums[slow];

    // If the two pointers meet, break out of the loop
    if (slow === fast) {
      break;
    }
  }

  // Reinitialize the slow pointer to the start of the array
  slow = nums[0];

  // Iterate through the input array again using a while loop until the two pointers meet again
  // This will find the starting point of the cycle in the array, which represents the duplicate number
  while (slow !== fast) {
    // Move both pointers by 1 step
    fast = nums[fast];
    slow = nums[slow];
  }

  // Return the number at the slow pointer, as the point where the two pointers meet is the duplicate number
  return slow;
};

// The time complexity of this algorithm is O(n) where n is the number of elements in the input array.
// This is because we are using two pointers to traverse the array and find the duplicate element,
// and the pointers will meet after at most n iterations.
// The space complexity is O(1) because we are not using any extra space that grows with the input size.
// We are only using a constant amount of space for the two pointers.
