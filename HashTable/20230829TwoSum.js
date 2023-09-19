// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length === 2) {
    // If the length of the array is equal to 2, the answer is the two elements
    return [0, 1];
  }

  // Create an object that stores values and indexes
  // For example, { 2: 0, 7: 1, 11: 2, 15: 3 }
  const valueObject = {};

  for (let index = 0; index < nums.length; index++) {
    // Calculate the target minus the value of that index
    const value = target - nums[index];

    if (value in valueObject) {
      // If the obtained value is in the valueObject object,
      // return the index of the obtained value and the original index
      return [valueObject[value], index];
    }

    // Store the obtained value and its index
    valueObject[nums[index]] = index;
  }
};

// The time complexity of this code is O(n), where n is the length of the input array nums.
// This is because the code iterates through the nums array once in the for loop, performing constant time operations for each element.
// The space complexity of this code is O(n), where n is the length of the input array nums.
// This is because the code creates a valueObject object to store the values and their corresponding indices.
// In the worst case scenario, where all elements in nums are unique, the valueObject object will store n key-value pairs.

// The time complexity of my initial code is O(nlogn) because there is a loop that iterates through each element in the nums array,
// and within that loop, there is a binary search operation that has a time complexity of O(logn).
// Therefore, the overall time complexity is O(nlogn).
// The space complexity of my initial code is O(1)
// because it only uses a constant amount of additional space to store variables like index, value, start, end, and middle.
// The space used does not depend on the size of the input array.

// if (nums.length === 2) {
//   return [0, 1];
// }

// for (let index = 0; index < nums.length; index++) {
//   const value = target - nums[index];

//   let start = index + 1;
//   let end = nums.length - 1;

//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     if (nums[middle] === value) {
//       return [index, middle];
//     } else if (nums[middle] < value) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
// }
