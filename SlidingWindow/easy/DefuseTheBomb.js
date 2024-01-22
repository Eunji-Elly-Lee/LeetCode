// https://leetcode.com/problems/defuse-the-bomb/description/
// Array / Sliding Window

// You have a bomb to defuse, and your time is running out!
// Your informer will provide you with a circular array code of length of n and a key k.
// To decrypt the code, you must replace every number.
// All the numbers are replaced simultaneously.
// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  // Create and initialize an empty array to store the decrypted code
  const decryptedCode = Array(code.length);

  // Iterate through the input array using a for loop
  for (let index = 0; index < code.length; index++) {
    // Create and initialize the sum as 0
    let sum = 0;

    // Iterate through the input array using a for loop to calculate the sum, k times
    // If k is 0, the sum would be 0 since the calculation is skipped
    for (let sumIndex = 1; sumIndex <= Math.abs(k); sumIndex++) {
      sum +=
        // Calculate the circular index based on the direction from the sign of k
        // If the current index is greater than the length of the input array, use the remainder after division by the length
        // Math.sign function returns the sign, indicating whether the number is positive, negative, or zero
        code[(index + sumIndex * Math.sign(k) + code.length) % code.length];
    }

    // Update the decrypted code array with the sum at the current index
    decryptedCode[index] = sum;
  }

  // Return the decrypted code array
  return decryptedCode;
};

// The time complexity of this code is O(n^2), where n is the length of the `code` array.
// This is because there is a nested loop that iterates through the `code` array,
// and for each iteration, it performs a sum operation that depends on the value of `k`.
// Therefore, the overall time complexity is O(n^2).
// The space complexity of this code is O(n), where n is the length of the `code` array.
// This is because the code array is stored in memory, and the `decryptedCode` array is created with the same length as the code array.
// Therefore, the space complexity is directly proportional to the length of the `code` array.
