// https://leetcode.com/problems/minimum-window-substring/description/
// Hash Table / String / Sliding Window

// Given two strings s and t of lengths m and n respectively,
// return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // If the length of t is greater than that of s, return an empty string
  if (s.length < t.length) {
    return "";
  }

  // Create a new map to store the frequency of characters in t
  const map = new Map();

  // Iterate through the input string t using a for..of loop
  for (const char of t) {
    // Update the frequency of the current character in the map
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  // Create the variables to store the substring, minimum length of the window, left and right indices of the window,
  // and the required number of characters
  let substring = "";
  let minimumWindow = Infinity;
  let leftIndex = 0;
  let rightIndex = 0;
  let requiredChars = t.length;

  // Iterate through the input string s using a while loop with the right index
  while (rightIndex < s.length) {
    const rightChar = s.charAt(rightIndex);

    // If the right character is in the map (in t), decrease its frequency and also the required number
    if (map.has(rightChar)) {
      if (map.get(rightChar) > 0) {
        requiredChars--;
      }

      map.set(rightChar, map.get(rightChar) - 1);
    }

    // If the required number is 0, it means that all characters in the window are in t
    while (requiredChars === 0) {
      // Update the minimum window and the substring
      if (rightIndex - leftIndex + 1 < minimumWindow) {
        minimumWindow = rightIndex - leftIndex + 1;
        substring = s.substring(leftIndex, rightIndex + 1);
      }

      const leftChar = s.charAt(leftIndex);

      // If the left character is in the map (in t), increase its frequency and also the required number
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1);

        if (map.get(leftChar) > 0) {
          requiredChars++;
        }
      }

      // Move the left index to the right side
      leftIndex++;
    }

    // Move the right index to the left side
    rightIndex++;
  }

  // Return the final substring
  return substring;
};

// The time complexity of this algorithm is O(n), where n is the length of the input string `s`.
// This is because we iterate through the string s only once with two pointers (leftIndex and rightIndex) moving from left to right.
// The space complexity of this algorithm is O(m), where m is the number of unique characters in the target string `t`.
// This is because we use a map to store the frequency of each character in `t`, which can have at most m entries.
