// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    // If the lengths of s and t are different, return false
    return false;
  }

  // Create an object that serves to store appearance frequency by character
  // For example, { a: 3, n: 1, g: 1, r: 1, m: 1 }
  const characterCounter = {};

  // Count characters in s
  for (const sCharacter of s) {
    if (characterCounter[sCharacter]) {
      characterCounter[sCharacter]++;
    } else {
      characterCounter[sCharacter] = 1;
    }
  }

  // Compare characters in t with the characterCounter object
  for (const tCharacter of t) {
    if (!characterCounter[tCharacter]) {
      // If the character in t isn't in the object, return false
      return false;
    }

    // Adjust the character counter
    characterCounter[tCharacter]--;
  }

  return true;
};

// The time complexity of this code is O(n), where n is the length of the input string.
// This is because we iterate through each character in both strings once.
// The space complexity is O(k), where k is the number of unique characters in the input string.
// This is because we use a characterCounter object to keep track of the count of each character.
// In the worst case scenario, where all characters in the input string are unique, the space complexity would be O(n).
// However, if the input string has a limited set of characters, the space complexity would be less than O(n).
