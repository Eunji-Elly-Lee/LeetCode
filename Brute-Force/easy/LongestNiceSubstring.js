// https://leetcode.com/problems/longest-nice-substring/description/
// Hash Table / String / Divide and Conquer / Bit Manipulation / Sliding Window

// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase.
// For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear.
// However, "abA" is not because 'b' appears, but 'B' does not.
// Given a string s, return the longest substring of s that is nice.
// If there are multiple, return the substring of the earliest occurrence.
// If there are none, return an empty string.

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  // Create and initialize an empty string to store the longest nice substring
  let niceString = "";

  // Iterate through the input string using a for loop with the start index for the substring
  for (let startIndex = 0; startIndex < s.length; startIndex++) {
    // Iterate through the input string using a for loop with the end index for the substring
    for (let endIndex = startIndex + 1; endIndex <= s.length; endIndex++) {
      // Create and initialize a new substring and the string set for it
      const substring = s.slice(startIndex, endIndex);
      const stringSet = new Set(substring);

      // Create and initialize a new boolean variable
      // for checking whether the substring is nice or not based on the given condition
      const isNice = [...substring].every(
        (char) =>
          stringSet.has(char.toLowerCase()) && stringSet.has(char.toUpperCase())
      );

      // If the current substring is nice and its length is longer than the current nice string,
      // update the nice string to the substring
      if (isNice && substring.length > niceString.length) {
        niceString = substring;
      }
    }
  }

  // Return the nice string
  return niceString;
};

// The time complexity of this code is O(n^3), where n is the length of the input string `s`.
// This is because there are two nested loops that iterate through all possible substrings of `s`,
// resulting in a total of n*(n+1)/2 iterations.
// Within each iteration, the code checks if the substring is "nice"
// by creating a set and checking if every character in the substring is both lowercase and uppercase.
// Creating the set takes O(k) time, where k is the length of the `substring`,
// and checking if every character is lowercase and uppercase takes O(k) time as well.
// Therefore, the overall time complexity is O(n^3).
// The space complexity of this code is O(n), where n is the length of the input string `s`.
// This is because the code creates a new `substring` and a new set for each iteration of the nested loops,
// resulting in a maximum of n substrings and n sets being created.
// Therefore, the overall space complexity is O(n).
