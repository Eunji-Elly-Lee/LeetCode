// You are given the strings key and message, which represent a cipher key and a secret message, respectively.
// The steps to decode message are as follows:
// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// https://leetcode.com/problems/decode-the-message/
// Hash Table / String

// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet),
// we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  // Create an object to store a substitution table
  const substitutionTable = {};
  // Set the ASCII code of the lowercase alphabet "a" as a starting point
  let startASCIICode = "a".charCodeAt(0);

  // Iterate through the input key string using a for...of loop
  for (const keyLetter of key) {
    // If a key letter is not a space and is not in the substitution table,
    // add the letter with the current ASCII code into the substitution table,
    // and increase the ASCII code to the next lowercase alphabet
    if (keyLetter !== " " && !(keyLetter in substitutionTable)) {
      substitutionTable[keyLetter] = startASCIICode;
      startASCIICode++;
    }
  }

  // Create a decoded message as an empty string
  let decodedMessage = "";

  // Iterate through the input message string using a for...of loop
  for (const messageLetter of message) {
    // If a message letter is a space, add a space into the decoded message,
    // if not, find the message letter in the substitution table, and add a lowercase alphabet converted from its ASCII code
    if (messageLetter === " ") {
      decodedMessage += " ";
    } else {
      decodedMessage += String.fromCharCode(substitutionTable[messageLetter]);
    }
  }

  // Return the decoded message
  return decodedMessage;
};

// The time complexity of this code is O(n), where n is the length of the input `message`.
// This is because the code iterates through each character in the input `message` once in the second for loop.
// The space complexity of this code is O(n), where n is the number of unique characters in the input `key`.
// This is because the `substitutionTable` object stores the unique characters in the `key` as keys,
// and the size of the object will be equal to the number of unique characters in the `key`.
