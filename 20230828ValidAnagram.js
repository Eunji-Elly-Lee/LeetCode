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

// The time complexity of this function is O(n), where n is the length of the input strings s and t.
// This is because the function iterates through both strings once to build the characterCounter object
// and then iterates through the second string to check if each character exists in the characterCounter object.
