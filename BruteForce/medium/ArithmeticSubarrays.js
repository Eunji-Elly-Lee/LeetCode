// https://leetcode.com/problems/arithmetic-subarrays/description/
// Array / Hash Table / Sorting

// A sequence of numbers is called arithmetic if it consists of at least two elements,
// and the difference between every two consecutive elements is the same.
// More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.
// For example, these are arithmetic sequences:
// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// The following sequence is not arithmetic:
// 1, 1, 2, 5, 7
// You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries,
// where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.
// Return a list of boolean elements answer,
// where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence,
// and false otherwise.

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  // Create and initialize an empty array to store a list of booleans indicating whether the subarrays are arithmetic or not  
  const answer = [];

  // Iterate through the input arrays l and r using a for loop
  for (let index = 0; index < l.length; index++) {
    // Create and calculate the sorted subarray from the current query and the difference between the first and second numbers in it    
    const sorted = nums.slice(l[index], r[index] + 1).sort((a, b) => a - b);
    const difference = sorted[1] - sorted[0];
    // Create and initialize the boolean value to indicate whether the current subarray is an arithmetic or not    
    let isArithmetic = true;

    // Iterate through the sorted array using a for loop
    for (let subIndex = 2; subIndex < sorted.length; subIndex++) {
      // If the difference between the current two numbers is not equal to the initial difference,
      // update the boolean value and break out of the current for loop
      if (sorted[subIndex] - sorted[subIndex - 1] !== difference) {
        isArithmetic = false;
        break;
      }
    }

    // Push the boolean value to the answer array
    answer.push(isArithmetic);
  }

  // Return the answer array
  return answer;
};

// The time complexity of this solution is O(n * m * log m),
// where n is the length of the `l` and `r` arrays and m is the maximum size of the subarrays.
// This is because for each subarray defined by the `l` and `r` arrays, we are sorting the subarray which takes O(m * log m) time.
// The space complexity is O(m) because we are creating a sorted array of size m for each subarray.
