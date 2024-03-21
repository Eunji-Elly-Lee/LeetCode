// https://leetcode.com/problems/3sum/description/
// Array / Two Pointers / Sorting

// Given an integer array nums,
// return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  // Create an empty array to store the answers
  const answers = [];

  // Iterate through the sorted array using a for loop until the index is 2 elements before the last element  
  for (let index = 0; index < nums.length - 2; index++) {
    // If the current index is equal to 0 or the current number is not equal to the previous number,
    // proceed with the process
    if (index === 0 || nums[index] !== nums[index - 1]) {
      // Create and initialize two pointers
      let leftPointer = index + 1;
      let rightPointer = nums.length - 1;

      // Iterate through the numbers using a while loop with the pointers
      while (leftPointer < rightPointer) {
        if (nums[index] + nums[leftPointer] + nums[rightPointer] < 0) {
          // If the sum of the current triplet is less than 0, move the left pointer to the right
          leftPointer++;
        } else if (nums[index] + nums[leftPointer] + nums[rightPointer] > 0) {
          // If the sum of the current triplet is greater than 0, move the right pointer to the left
          rightPointer--;
        } else {
          // Otherwise, it means the sum of the current triplet is equal to 0, push the answer to the answers array
          answers.push([nums[index], nums[leftPointer], nums[rightPointer]]);

          // Move the left pointer to the right until the number is not duplicate
          while (
            leftPointer < rightPointer &&
            nums[leftPointer] === nums[leftPointer + 1]
          ) {
            leftPointer++;
          }

          // Move the right pointer to the left until the number is not duplicate
          while (
            leftPointer < rightPointer &&
            nums[rightPointer] === nums[rightPointer - 1]
          ) {
            rightPointer--;
          }

          // Move two pointers to each direction
          leftPointer++;
          rightPointer--;
        }
      }
    }
  }

  // Return the final answers array
  return answers;
};

// The time complexity of this algorithm is O(n^2), where n is the number of elements in the input array.
// This is because we have a nested loop where the outer loop runs for n-2 iterations and the inner loop runs for at most n-1 iterations. 
// The space complexity of this algorithm is O(1) because we are not using any extra space that grows with the input size.
// We are only using a constant amount of space for storing the output array and a few variables for indices and comparisons.
