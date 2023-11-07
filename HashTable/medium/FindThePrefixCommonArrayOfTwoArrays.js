// You are given two 0-indexed integer permutations A and B of length n.
// A prefix common array of A and B is an array C
//such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.
// Return the prefix common array of A and B.
// A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  // Create a set to store numbers
  const numberSet = new Set();
  // Create an array to store the prefix common array of A and B
  const prefixCommonArray = [];
  // Create a counter to count the number of common elements
  let counter = 0;

  // Iterate through the input arrays using a for loop
  for (let index = 0; index < A.length; index++) {
    // If a number from array A is in the number set, increase the counter
    // Otherwise, add the number into the number set
    if (numberSet.has(A[index])) {
      counter++;
    } else {
      numberSet.add(A[index]);
    }

    // If a number from array B is in the number set, increase the counter
    // Otherwise, add the number into the number set
    if (numberSet.has(B[index])) {
      counter++;
    } else {
      numberSet.add(B[index]);
    }

    // Push the counter into the prefix common array
    prefixCommonArray.push(counter);
  }

  // Return the prefix common array
  return prefixCommonArray;
};

// The time complexity of this code is O(n), where n is the length of the input array `A`.
// This is because the code iterates through each element of the array `A` and `B` once in the for loop.
// The space complexity of this code is O(n), where n is the length of the input array `A`.
// This is because the code creates a new Set object `numberSet` and an array `prefixCommonArray`, both of which can potentially store n elements.
