// https://leetcode.com/problems/strictly-palindromic-number/
// Math / Two Pointers / Brainteaser

// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive),
// the string representation of the integer n in base b is palindromic.
// Given an integer n, return true if n is strictly palindromic and false otherwise.
// A string is palindromic if it reads the same forward and backward.

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  // Iterate through the process using a for...of loop for each base given condition
  for (let base = 2; base <= n - 2; base++) {
    // Create and initialize the converted number string in the current base and pointers
    const inBase = n.toString(base);
    let leftPointer = 0;
    let rightPointer = word.length - 1;

    // Iterate through the string using a while loop
    while (leftPointer < rightPointer) {
      // If the current characters are the same, move the pointers in each direction
      // Otherwise, return false
      if (inBase.charAt(leftPointer) === inBase.charAt(rightPointer)) {
        leftPointer++;
        rightPointer--;
      } else {
        return false;
      }
    }
  }

  // Return true because n is strictly palindromic
  return true;
};

// The time complexity of this code is O(n log n), where n is the input number.
// This is because the code iterates from base 2 to base n-2, and for each base,
// it converts the number to that base using the toString() method, which has a time complexity of O(log n).
// Therefore, the overall time complexity is O(n log n).
// The space complexity of this code is O(log n), where n is the input number.
// This is because for each base, the number is converted to that base using the toString() method,
// which creates a new string representation of the number.
// The length of this string representation is proportional to the logarithm of the number in that base.
// Therefore, the overall space complexity is O(log n).
