// https://leetcode.com/problems/valid-anagram/
// Hash Table / String / Sorting

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // If the lengths of the input strings are not the same, return false
  if (s.length !== t.length) {
    return false;
  }

  // Create and initialize a new map to store the frequency of each Unicode character in the input string s
  const codeFrequencyMap = new Map();

  // Iterate through the input string s using a for...of loop
  for (const character of s) {
    // If the Unicode of the current character is in the map, update the value by adding 1
    // Otherwise, set the Unicode of the current character with a value of 1
    if (codeFrequencyMap.has(character.charCodeAt(0))) {
      codeFrequencyMap.set(
        character.charCodeAt(0),
        codeFrequencyMap.get(character.charCodeAt(0)) + 1
      );
    } else {
      codeFrequencyMap.set(character.charCodeAt(0), 1);
    }
  }

  // Iterate through the input string t using a for...of loop
  for (const character of t) {
    // If the Unicode of the current character is not in the map, or the value of the code is less than 1,
    // return false
    if (
      !codeFrequencyMap.has(character.charCodeAt(0)) ||
      codeFrequencyMap.get(character.charCodeAt(0)) < 1
    ) {
      return false;
    }

    // Update the value of the current character by subtracting 1
    codeFrequencyMap.set(
      character.charCodeAt(0),
      codeFrequencyMap.get(character.charCodeAt(0)) - 1
    );
  }

  // Return true since both strings have the same Unicode character frequency
  return true;
};

// The time complexity of this code is O(n), where n is the length of the input strings `s` and `t`.
// This is because the code iterates through each character in both strings once.
// The space complexity of this code is O(n), where n is the number of unique characters in the input string `s`.
// This is because the code uses a map to store the frequency of each character in `s`.
// The space required by the map is proportional to the number of unique characters in `s`.
