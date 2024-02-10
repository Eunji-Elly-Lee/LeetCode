// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Hash Table / String / Sliding Window

// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Create and initialize variables
  // for an empty set, the length of the current substring, and the left index of the sliding window
  const set = new Set();
  let lengthOfSubstring = 0;
  let leftIndex = 0;

  // Iterate through the input string using a for loop with the right index of the sliding window
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    // If the current character is already in the set,
    // remove characters from the left side of the window until the set no longer contains the current character
    if (set.has(s.charAt(rightIndex))) {
      while (set.has(s.charAt(rightIndex))) {
        set.delete(s.charAt(leftIndex));
        leftIndex++;
      }
    }

    // Add the current character to the set and update the length of the current substring
    set.add(s.charAt(rightIndex));
    lengthOfSubstring = Math.max(lengthOfSubstring, rightIndex - leftIndex + 1);
  }

  // Return the length of the longest substring
  return lengthOfSubstring;
};

// The time complexity of this algorithm is O(n), where n is the length of the input string.
// This is because we iterate through the string once,
// and for each character, we perform constant time operations such as adding or deleting from the `set`.
// The space complexity is O(min(n, m)), where n is the length of the input string and m is the size of the character set.
// In the worst case, where all characters in the string are unique,
// the size of the set will be equal to the length of the string, resulting in O(n) space complexity.
// However, if the string contains duplicate characters, the size of the set will be limited to the number of unique characters,
// resulting in O(m) space complexity.
