// https://leetcode.com/problems/valid-palindrome/description/
// Two Pointers / String

// A phrase is a palindrome if,
// after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Convert the input string according to the given condition
  let converted = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  // Create and initialize two pointers to track each letter on the left and right sides
  let leftPointer = 0;
  let rightPointer = converted.length - 1;

  // Iterate through the converted string using a while loop with the pointers
  while (leftPointer <= rightPointer) {
    // If the current left and right letters are not equal to each other, return false
    if (converted.charAt(leftPointer) !== converted.charAt(rightPointer)) {
      return false;
    }

    // Move the pointers in each direction
    leftPointer++;
    rightPointer--;
  }

  // If no different letters are found, it means it is a palindrome
  return true;
};

// The time complexity of this function is O(n) where n is the length of the input string `s`.
// This is because we iterate through the string once to remove non-alphanumeric characters
// and then compare characters from both ends of the string.
// The space complexity is also O(n) because we create a new string with alphanumeric characters only,
// which could be up to the same length as the input string.
