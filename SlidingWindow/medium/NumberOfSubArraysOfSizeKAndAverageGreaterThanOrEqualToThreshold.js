// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
// Array / Sliding Window

// Given an array of integers arr and two integers k and threshold,
// return the number of sub-arrays of size k and average greater than or equal to threshold.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  // Create and initialize the number of sub-arrays and the sum of the sub-array as 0
  let numberOfSubArrays = 0;
  let sum = 0;

  // Calculate the sum of the sub-array of the first k elements
  for (let firstKIndex = 0; firstKIndex < k; firstKIndex++) {
    sum += arr[firstKIndex];
  }

  // If the average of the first sub-array is greater than or equal to the threshold,
  // increase the number of sub-arrays
  if (sum / k >= threshold) {
    numberOfSubArrays++;
  }

  // Iterate through the input array using a for loop starting from the index after k
  for (let index = k; index < arr.length; index++) {
    // Update the sum of the sub-array by adding the right element and removing the left element
    sum += arr[index] - arr[index - k];

    // If the average of the first sub-array is greater than or equal to the threshold,
    // increase the number of sub-arrays
    if (sum / k >= threshold) {
      numberOfSubArrays++;
    }
  }

  // Return the number of sub-arrays
  return numberOfSubArrays;
};

// The time complexity of this code is O(n), where n is the length of the input array `arr`.
// This is because there is a single loop that iterates through the array once.
// The space complexity of this code is O(1), as there are no additional data structures or variables that grow with the size of the input.
// The only variables used are `numberOfSubArrays`, `sum`, `firstKIndex`, and `index`, which are all constant in size.
