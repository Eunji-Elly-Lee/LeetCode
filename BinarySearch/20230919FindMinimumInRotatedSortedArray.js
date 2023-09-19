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
  if (nums.length === 1) {
    // If the length is 1, the element itself is the minimum
    return nums[0];
  }

  // Create and initialize the minimum, left and right indices
  let minimum = nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Set the middle index
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < minimum) {
      // If the middle element is less than the current minimum, update the minimum and move the right index to the left
      minimum = nums[middle];
      right = middle - 1;
    } else {
      // If the middle element is greater than or equal to the current minimum, move the left index to the right
      left = middle + 1;
    }
  }

  // Return the minimun
  return minimum;
};

// The time complexity of this code is O(log n) because it uses binary search to find the minimum element in the array.
// In each iteration of the while loop, the search space is halved, resulting in a logarithmic time complexity.
// The space complexity of this code is O(1)
// because it only uses a constant amount of extra space to store the minimum element, left pointer, right pointer, and middle index.
// The space used does not depend on the size of the input array.

// The time complexity of my initial code is O(n), where n is the length of the input array nums.
// This is because the while loop iterates through the array once, comparing each element to the current minimum.
// The space complexity of my initial code is O(1) because it uses a constant amount of extra space, regardless of the size of the input array.

// if (nums.length === 1) {
//   return nums[0];
// }

// let minimum = nums[0];
// let right = nums.length - 1;

// while (minimum > nums[right]) {
//   minimum = nums[right];
//   right--;
// }

// return minimum;
