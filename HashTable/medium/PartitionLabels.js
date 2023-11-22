// https://leetcode.com/problems/partition-labels/
// Hash Table / Two Pointers / String / Greedy

// You are given a string s.
// We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // Create a map to store the last index of each letter
  const lastIndices = new Map();

  // Iterate through the input string using a for loop
  for (let index = 0; index < s.length; index++) {
    // Update the index of the current letter so that the last index is stored in the map
    lastIndices.set(s.charAt(index), index);
  }

  // Create an empty array to store the size of a partition
  const sizes = [];
  // Create number variables to store the start and end indices
  let startIndex = 0;
  let lastIndex = 0;

  // Iterate through the input string using a for loop
  for (let index = 0; index < s.length; index++) {
    // If the last index of the current letter is greater then the current last index,
    // update the last index as the last index of the current letter
    if (lastIndices.get(s.charAt(index)) > lastIndex) {
      lastIndex = lastIndices.get(s.charAt(index));
    }

    // If the current index is the same as the current last index,
    // push the size of the current partition and update the start index
    if (index === lastIndex) {
      sizes.push(lastIndex - startIndex + 1);
      startIndex = index + 1;
    }
  }

  // Return the size array
  return sizes;
};

// The time complexity of this code is O(n), where n is the length of the input string `s`.
// This is because the code iterates through the string twice:
// once to populate the map `lastIndices`, and once to calculate the sizes array.
// Both iterations have a linear time complexity.
// The space complexity of this code is O(n), where n is the length of the input string `s`.
// This is because the code uses a map to store the last indices of each character in the string, which requires O(n) space.
// Additionally, the sizes array can potentially have a length of n in the worst case, so it also contributes to the space complexity.

// The time complexity of my initial code is O(n^2) because there is a nested loop.
// The outer loop iterates through the string s, which has a length of n.
// The inner loop uses the lastIndexOf method, which has a time complexity of O(n) in the worst case.
// Therefore, the overall time complexity is O(n^2).
// The space complexity of my initial code is O(n) because the sizes array can potentially store n elements,
// where n is the length of the string s.

// var partitionLabels = function (s) {
//   const sizes = [];
//   let startIndex = 0;
//   let lastIndex = 0;

//   for (let index = 0; index < s.length; index++) {
//     if (s.lastIndexOf(s.charAt(index)) > lastIndex) {
//       lastIndex = s.lastIndexOf(s.charAt(index));
//     }

//     if (index === lastIndex) {
//       sizes.push(lastIndex - startIndex + 1);
//       startIndex = index + 1;
//     }
//   }

//   return sizes;
// };
