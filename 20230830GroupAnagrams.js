// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    // If the length of the array is 1, return an object containing only one array
    return [strs];
  }

  // Create an object to store anagram groups,
  // where the key represents an ordered string and the value is an array of strings that are anagrams of each other
  // For example, { abt: ["bat"], ant: ["nat", "tan"], aet: ["ate", "eat", "tea"] }
  const anagramGroups = {};

  for (const string of strs) {
    // Sort the characters of the string
    const sortedString = string.split("").sort().join("");

    if (!(sortedString in anagramGroups)) {
      // If the sorted string isn't a key in the object, insert it as a new key
      anagramGroups[sortedString] = [];
    }

    // Insert the original string into the array of the key
    anagramGroups[sortedString].push(string);
  }

  // Return the array of values from the object
  return Object.values(anagramGroups);
};

// The time complexity of this code is O(n * m * log(m)),
// where n is the length of the input array strs and m is the average length of the strings in strs.
// This is because for each string in strs,
// we split it into an array of characters, sort the characters (which takes O(m * log(m)) time), and then join them back into a string.
// This process is repeated for each string in strs, resulting in a time complexity of O(n * m * log(m)).
