// https://leetcode.com/problems/merge-strings-alternately/
// Two Pointers / String

// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  // Create and initialize the merged string and pointer
  let mergeString = "";
  let pointer;

  // Iterate through the input strings using a for loop
  // until the pointer reaches the end of the shorter string
  for (pointer = 0; pointer < Math.min(word1.length, word2.length); pointer++) {
    // Merge the letters in alternating order
    mergeString += word1.charAt(pointer) + word2.charAt(pointer);
  }

  // If the pointer is at the length of one of the strings,
  // append the additional letters from the other string
  if (pointer === word1.length) {
    mergeString += word2.slice(pointer);
  } else {
    mergeString += word1.slice(pointer);
  }

  // Return the merged string
  return mergeString;
};

// The time complexity of this code is O(n), where n is the length of the shorter word between `word1` and `word2`.
// This is because the for loop iterates through the characters of the shorter word, performing a constant time operation (charAt) for each iteration.
// The space complexity of this code is O(n), where n is the sum of the lengths of `word1` and `word2`.
// The space used is proportional to the length of the merged string `mergeString`.
