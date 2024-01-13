// https://leetcode.com/problems/partition-array-according-to-given-pivot/description/
// Array / Two Pointers / Simulation

// You are given a 0-indexed integer array nums and an integer pivot.
// Rearrange nums such that the following conditions are satisfied:
// Every element less than pivot appears before every element greater than pivot.
// Every element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element.
// For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj.
// Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
// Return nums after the rearrangement.

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  // Create three arrays to store the numbers based on the given condition
  const lessArray = [];
  const greaterArray = [];
  const pivotArray = [];

  // Iterate through the input array using a for...of loop
  for (const number of nums) {
    // Push the current number into the correct array after comparison with the pivot
    if (number < pivot) {
      lessArray.push(number);
    } else if (number > pivot) {
      greaterArray.push(number);
    } else {
      pivotArray.push(number);
    }
  }

  // Return nums after rearranging with three arrays
  return (nums = [...lessArray, ...pivotArray, ...greaterArray]);
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element of the `nums` array once.
// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code creates three additional arrays (`lessArray`, `greaterArray`, and `pivotArray`)
// to store the elements that are less than, greater than, and equal to the pivot value.
// The total space used by these arrays is proportional to the length of the input array.
// Additionally, the code creates a new array `nums` to store the sorted elements, which also has a space complexity of O(n).

// Using Two Pointers
// Create and initialize a new array to store the rearranged elements and each pointer
// const rearrangedArray = new Array(nums.length);
// let leftPointer = 0;
// let rightPointer = nums.length - 1;

// // Iterate through the input array using a for loop from each endpoint
// for (
//   let leftIndex = 0, rightIndex = nums.length - 1;
//   leftIndex < nums.length;
//   leftIndex++, rightIndex--
// ) {
//   // Update the new array from each endpoint by comparing elements at each endpoint with a pivot
//   if (nums[leftIndex] < pivot) {
//     rearrangedArray[leftPointer] = nums[leftIndex];
//     leftPointer++;
//   }

//   if (nums[rightIndex] > pivot) {
//     rearrangedArray[rightPointer] = nums[rightIndex];
//     rightPointer--;
//   }
// }

// // Iterate through the input array using a for loop to fill in the middle of the array with numbers such as pivoting
// for (let index = leftPointer; index <= rightPointer; index++) {
//   rearrangedArray[index] = pivot;
// }

// // Return nums after rearranging with the new array
// return (nums = [...rearrangedArray]);

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because we iterate through the array once in the first for loop,
// and then iterate through a portion of the array in the second for loop.
// Both loops have a linear time complexity.
// The space complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because we create a new array `rearrangedArray` with the same length as `nums`.
// Therefore, the space required is proportional to the size of the input array.
