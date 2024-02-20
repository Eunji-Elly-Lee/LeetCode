// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
// Hash Table / String / Counting

// You are given two strings of the same length s and t.
// In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  // Create an empty map to store the frequency of characters from the input string s
  const charMap = new Map();

  // Iterate through the input string s using a for...of loop
  for (const char of s) {
    // If the current character is already in the map, update its value by adding 1
    // Otherwise, set the character in the map with a value of 1
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  // Create and initialize the steps to count the number of characters that need to be replaced
  let steps = 0;

  // Iterate through the input string t using a for...of loop
  for (const char of t) {
    // If the current character is already in the map and its frequency is not 0,
    // update its value by subtracting 1
    // Otherwise, increase the steps
    if (charMap.has(char) && charMap.get(char) !== 0) {
      charMap.set(char, charMap.get(char) - 1);
    } else {
      steps++;
    }
  }

  // Return the total steps
  return steps;
};

// The time complexity of this solution is O(n), where n is the length of the input strings `s` and `t`.
// This is because we iterate through both strings once to build the character map
// and then iterate through the second string to check for characters that need to be copied.
// The space complexity is also O(n) because we use a map to store the frequency of characters in the first string.
// The space used by the map is proportional to the number of unique characters in the input string `s`.
