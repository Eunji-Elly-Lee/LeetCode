// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // The loop divides the search range in half with each iteration, based on the middle element.
  // This approach results in a time complexity of O(log n).

  // Get the start index and the end index of the array
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // Calculate the middle index from the start and end indices
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      // If the middle element is equal to the target, return the middle index
      return middle;
    } else if (nums[middle] < target) {
      // If the middle element is less than the target, update the start pointer to the middle + 1
      start = middle + 1;
    } else {
      // If the middle element is greater than the target, update the end pointer to the middle - 1
      end = middle - 1;
    }
  }

  // If the target is not found, return the start index
  // where the target would be inserted in the sorted order
  return start;
};

// The time complexity of this code is O(log n) because it uses binary search to find the target element in a sorted array.
// In each iteration of the while loop, the search space is halved, so the algorithm has a logarithmic time complexity.
// The space complexity of this code is O(1) because it only uses a constant amount of additional space to store the variables start, end, and middle.
// The space used does not depend on the size of the input array.
