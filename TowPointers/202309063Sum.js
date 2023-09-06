// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sort the numbers in ascending order using a comparison function
  nums.sort((a, b) => a - b);

  // Create an array to store the resulte
  const answers = [];

  for (let index = 0; index < nums.length - 2; index++) {
    // Check if the current number is unique or has been validated before
    if (index === 0 || nums[index] !== nums[index - 1]) {
      // Initialize pointers at the beginning and end of the sorted array
      let left = index + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (nums[index] + nums[left] + nums[right] === 0) {
          answers.push([nums[index], nums[left], nums[right]]);

          // Move the left pointer to skip duplicate elements
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          // Move the right pointer to skip duplicate elements
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          // Move both pointers towards the center
          left++;
          right--;
        } else if (nums[index] + nums[left] + nums[right] < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return answers;
};

// The time complexity of this code is O(n^2), where n is the length of the input array nums.
// This is because there is a nested loop that iterates through the array nums, and for each iteration,
// it performs a while loop that iterates from the left and right pointers.
// The while loop has a complexity of O(n) in the worst case, and since it is nested within the first loop, the overall complexity becomes O(n^2).
// The space complexity of this code is O(1) because it only uses a constant amount of additional space to store the output array answers.
// The input array ns is modified in place and does not require any additional space.
