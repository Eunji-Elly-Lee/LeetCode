// https://leetcode.com/problems/h-index/
// Array / Sorting / Counting Sort

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper,
// return the researcher's h-index.
// According to the definition of h-index on Wikipedia:
// The h-index is defined as
// the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Sort the citations array in descending order
  citations.sort((a, b) => b - a);

  // Create and initialize the h-index to 0
  let hIndex = 0;

  // Iterate through the sorted array using a for loop
  for (let index = 0; index < citations.length; index++) {
    // If the current citation is greater than or equal to the current index, increase the h-index
    // Otherwise, exit the loop
    if (citations[index] >= index + 1) {
      hIndex++;
    } else {
      break;
    }
  }

  // Return the h-index
  return hIndex;
};

// The time complexity of this code is O(nlogn), where n is the length of the `citations` array.
// This is because the code first sorts the `citations` array using the Array.sort() method, which has a time complexity of O(nlogn).
// Then, it iterates through the sorted array once, which has a time complexity of O(n).
// The space complexity of this code is O(1) because it only uses a constant amount of extra space to store the `hIndex` variable.
// The sorting operation is done in-place and does not require any additional space.
