// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
// Array / Two Pointers / String

// Given an array of strings words, return the first palindromic string in the array.
// If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  // Iterate through the input array using a for...of loop
  for (const word of words) {
    // Create and initialize pointers
    let leftPointer = 0;
    let rightPointer = word.length - 1;

    // Iterate through the current word using a while loop
    while (leftPointer < rightPointer) {
      // If the current characters are the same, move the pointers in each direction
      // Otherwise, break the while loop
      if (word.charAt(leftPointer) === word.charAt(rightPointer)) {
        leftPointer++;
        rightPointer--;
      } else {
        break;
      }
    }

    // If the left pointer is greater than or equal to the right pointer,
    // return the current word because it means the word is the first palindromic
    if (leftPointer >= rightPointer) {
      return word;
    }
  }

  // Return an empty string because a palindromic word was not found
  return "";
};

// The time complexity of this code is O(n*m),
// where n is the number of words in the `words` array and m is the average length of the `words`.
// This is because we iterate through each word in the array and then iterate through half of the characters in each word.
// The space complexity of this code is O(1) because we are not using any additional data structures that grow with the input size.
