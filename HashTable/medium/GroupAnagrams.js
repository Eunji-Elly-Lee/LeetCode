// https://leetcode.com/problems/group-anagrams/description/
// Array / Hash Table / String / Sorting

// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Create a new map to store anagrams
  const map = new Map();

  // Iterate through the input array using a for...of loop
  for (const string of strs) {
    // Sort the current string
    const sorted = string.split("").sort().join("");

    // If the sorted string is already in the map, update its value array by pushing the current string
    // Otherwise, set the sorted string as a key with the current string as a value array
    if (map.has(sorted)) {
      map.get(sorted).push(string);
    } else {
      map.set(sorted, [string]);
    }
  }

  // Return the arrays of grouped anagrams from the map
  return [...map.values()];
};

// The time complexity of this solution is O(n * m * log(m)),
// where n is the number of strings in the input array and m is the average length of each string.
// This is because for each string, we are sorting it, which takes O(m * log(m)) time.
// The space complexity is O(n * m) because we are storing the sorted strings in the map,
// where n is the number of unique sorted strings and m is the average length of each string.
