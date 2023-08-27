// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
//   if (nums.length === 1) {
//     return false;
//   } else {
//     let hasDuplicatedElement = false;
//     let index = 1;

//     while (!hasDuplicatedElement && index <= nums.length - 1) {
//       for (tempIndex = 0; tempIndex < index; tempIndex++) {
//         if (nums[tempIndex] === nums[index]) {
//           hasDuplicatedElement = true;

//           break;
//         }
//       }

//       index++;
//     }

//     return hasDuplicatedElement;
//   }

  const newSet = new Set(nums);

  return newSet.size !== nums.length;
};
