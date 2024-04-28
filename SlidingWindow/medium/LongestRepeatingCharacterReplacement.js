// https://leetcode.com/problems/longest-repeating-character-replacement/description/
// Hash Table / String / Sliding Window

// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // Create and initialize variables to store the frequency of letters, the length of the longest substring,
  // the number of same letters in the current window, and the left index of the sliding window
  const map = new Map();
  let longestSubstring = 0;
  let sameLetters = 0;
  let leftIndex = 0;

  // Iterate through the input string using a for loop with the right index
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    // Update the frequency of the current letter in the map
    if (map.has(s.charAt(rightIndex))) {
      map.set(s.charAt(rightIndex), map.get(s.charAt(rightIndex)) + 1);
    } else {
      map.set(s.charAt(rightIndex), 1);
    }

    // Update the number of same letters in the current window
    sameLetters = Math.max(sameLetters, map.get(s.charAt(rightIndex)));

    // If the current window length is greater than the sum of the number of same letters and k,
    // reduce the window size by moving the left index to the right
    if (sameLetters + k < rightIndex - leftIndex + 1) {
      // Reduce the frequency of the left letter in the window
      map.set(s.charAt(leftIndex), map.get(s.charAt(leftIndex)) - 1);
      // Move the left index to the right side
      leftIndex++;
    }

    // Update the length of the longest substring by comparing it with the current window length
    longestSubstring = Math.max(longestSubstring, rightIndex - leftIndex + 1);
  }

  // Return the length of the longest substring
  return longestSubstring;
};

// The time complexity of this solution is O(n), where n is the length of the input string `s`.
// This is because we iterate through the string once using two pointers (leftIndex and rightIndex)
// and update the map with the frequency of letters.
// The space complexity is O(1) because the size of the map is bounded by the number of unique characters in the input string,
// which is constant.
