// https://leetcode.com/problems/reverse-prefix-of-word/
// Two Pointers / String

// Given a 0-indexed string word and a character ch,
// reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
// If the character ch does not exist in word, do nothing.
// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive).
// The resulting string will be "dcbaefd".
// Return the resulting string.

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  // Find the index of the input character to use as a reference point
  const charIndex = word.indexOf(ch);
  // Create a segment and reverse it
  const segment = word.split("", charIndex + 1).reverse().join("");
  
  // Return the reversed segment and the remaining part behind the segment combined
  return segment + word.slice(charIndex + 1);
};

// The time complexity of this code is O(n), where n is the length of the `word`.
// This is because the code performs three operations: indexOf(), split(), and join(), each of which has a time complexity of O(n).
// Therefore, the overall time complexity is O(n).
// The space complexity of this code is O(n), where n is the length of the `word`.
// This is because the split() function creates a new array with n elements,
// and the reverse() function also creates a new array with n elements.
// Therefore, the overall space complexity is O(n).
