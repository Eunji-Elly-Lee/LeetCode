// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/
// Hash Table / String / Sliding Window / Counting

// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  // Create and initialize the number of good substrings to 0
  let numberOfGoodSubstrings = 0;

  // Iterate through the input string using a for loop
  for (let index = 0; index < s.length - 2; index++) {
    // If the current substring of length three has unique three letters,
    // update the number of good substrings
    if (new Set(s.slice(index, index + 3)).size === 3) {
      numberOfGoodSubstrings++;
    }
  }

  // Return the number of good substrings
  return numberOfGoodSubstrings;
};

// The time complexity of this code is O(n), where n is the length of the string `s`.
// This is because the code iterates through the string once, checking each substring of length 3.
// Since the length of the string is fixed, the time complexity is linear.
// The space complexity of this code is O(1).
// This is because the code only uses a constant amount of additional space, regardless of the size of the input string.
// The only additional space used is for the variable `numberOfGoodSubstrings`, which is a single integer.
