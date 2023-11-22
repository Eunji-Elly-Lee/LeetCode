// https://leetcode.com/problems/rotate-array/
// Array / Math / Two Pointers

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Follow up:
// Try to come up with as many solutions as you can.
// There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // If k is greater than the length of the array nums, use the remainder after division by the length
  k = k % nums.length;

  // Create and initialize a counter, pointers, and a temporary previous number
  let counter = 0;
  let startPointer = 0;
  let currentPointer = startPointer;
  let prevNumber = nums[startPointer];

  // Iterate through the array until all elements are processed
  while (counter < nums.length) {
    // Calculate the next pointer after rotation
    const nextPointer = (currentPointer + k) % nums.length;

    // Swap the numbers between the current number and the next number
    const tempNumber = nums[nextPointer];
    nums[nextPointer] = prevNumber;
    prevNumber = tempNumber;

    // Move to the next number, and increase the counter
    currentPointer = nextPointer;
    counter++;

    // If a full cycle is completed, increase the start pointer,
    // and update the current pointer and the temporary previous number
    if (currentPointer === startPointer) {
      startPointer++;
      currentPointer = startPointer;
      prevNumber = nums[startPointer];
    }
  }
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the while loop iterates n times, and each iteration takes constant time.
// The space complexity of this code is O(1),
// because it uses a constant amount of extra space regardless of the size of the input array.

// The time complexity of my initial code is O(k * n), where n is the length of the `nums` array.
// This is because the while loop runs `k` times, and within each iteration, there is a for loop that runs n-1 times.
// Therefore, the overall time complexity is O(k * n).
// The space complexity of my initial code is O(1) because it only uses a constant amount of additional space.
// The variables counter, temp, index, and number are all individual variables that do not depend on the size of the input array.

// var rotate = function (nums, k) {
//   let counter = 0;

//   while (counter < k) {
//     let temp = nums[0];

//     for (let index = 1; index < nums.length; index++) {
//       const number = nums[index];
//       nums[index] = temp;
//       temp = number;
//     }
//     nums[0] = temp;

//     counter++;
//   }
// };
