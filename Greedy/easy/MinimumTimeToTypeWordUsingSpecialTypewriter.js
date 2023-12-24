// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
// String / Greedy

// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer.
// A character can only be typed if the pointer is pointing to that character.
// The pointer is initially pointing to the character 'a'.
// Each second, you may perform one of the following operations:
// Move the pointer one character counterclockwise or clockwise.
// Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  // Create and initialize variables for the time in seconds and the current pointer
  let seconds = 0;
  let pointer = "a";

  // Iterate through the input string using a for loop
  for (let index = 0; index < word.length; index++) {
    // Calculate the absolute distance between the current character and the character pointed to,
    // and update the time by adding 1 second to the minimum distance between clockwise and counterclockwise
    const distance = Math.abs(word.charCodeAt(index) - pointer.charCodeAt(0));
    seconds += Math.min(distance, 26 - distance) + 1;

    // Update the character pointed to
    pointer = word.charAt(index);
  }

  // Return the time in seconds
  return seconds;
};

// The time complexity of this code is O(n), where n is the length of the `word`.
// This is because the code iterates through each character in the `word` once in the for loop.
// The space complexity of this code is O(1)
// because it only uses a constant amount of space to store the variables `seconds` and `pointer`.
// The space used does not depend on the size of the input `word`.
