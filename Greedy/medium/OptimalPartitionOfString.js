// https://leetcode.com/problems/optimal-partition-of-string/description/
// Hash Table / String / Greedy

// Given a string s, partition the string into one or more substrings such that the characters in each substring are unique.
// That is, no letter appears in a single substring more than once.
// Return the minimum number of substrings in such a partition.
// Note that each character should belong to exactly one substring in a partition.

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  // Create and initialize an empty set to store characters in a substring
  // and a variable for a counter of the number of substrings
  const charSet = new Set();
  let counter = 1;

  // Iterate through the input string using a for...of loop
  for (const char of s) {
    // If the current character is already in the set,
    // start a new substring by clearing the set and increase the counter
    if (charSet.has(char)) {
      charSet.clear();
      counter++;
    }

    // Add the current character to the set
    charSet.add(char);
  }

  // Return the total counter of the number of substrings
  return counter;
};

// The time complexity of this code is O(n), where n is the length of the input string `s`.
// This is because the code iterates through each character in the string once,
// and the operations inside the loop (checking if a character is in the set, adding a character to the set, and clearing the set)
// all have a time complexity of O(1).
// The space complexity of this code is also O(n), as the size of the set `charSet` can grow up to the size of the input string `s`.
