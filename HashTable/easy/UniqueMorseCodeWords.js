// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// https://leetcode.com/problems/unique-morse-code-words/
// Array / Hash Table / String

// For convenience, the full table for the 26 letters of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.",
//  "---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...".
// We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  // Create a Morse code table by given data
  const MORSE_CODE_TABLE =
    [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--",
    "-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  // Create a set to store the transformations of words
  const transformations = new Set();

  // Iterate through the words array using a for...of loop
  for (const word of words) {
    // Create a string to store the transformation of the word
    let transformation = "";

    // Iterate through the word using a for...of loop
    for (const letter of word) {
      // Add the Morse code of the letter from the Morse code table into the transformation string using ASCII code
      transformation += MORSE_CODE_TABLE[letter.charCodeAt(0) - "a".charCodeAt(0)];
    }

    // Add the transformation string into the transformation set
    transformations.add(transformation);
  }

  // Return the size of the transformation set
  return transformations.size;
};

// The time complexity of this code is O(n^2), where n is the length of the input array `words` and the maximum length of a word.
// This is because we iterate over each word in the `words` array and then iterate over each letter in the word.
// The space complexity of this code is O(n), where n is the number of unique Morse code transformations.
