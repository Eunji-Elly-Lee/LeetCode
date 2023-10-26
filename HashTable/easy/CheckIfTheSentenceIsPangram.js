// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  // Create a set to store the unique letters in the sentence
  const letterSet = new Set(sentence);

  // Return true if the size of the set is 26
  return letterSet.size === 26;
};

// The time complexity of this function is O(n), where n is the length of the `sentence`.
// This is because we are creating a set from the `sentence`, which takes O(n) time.
// The space complexity of this function is O(n), where n is the length of the `sentence`.
// This is because we are creating a set to store the unique letters in the `sentence`, and the size of the set can be at most 26.
