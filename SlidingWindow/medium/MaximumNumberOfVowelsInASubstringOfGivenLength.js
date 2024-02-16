// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
// String / Sliding Window

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  // Create and initialize variables for the regular expression of vowels, the maximum and current numbers of vowels,
  // and the left index
  const vowels = /[aeiou]/;
  let maxVowels = 0;
  let currentVowels = 0;
  let leftIndex = 0;

  // Iterate through the input string using a for loop with the right index
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    // If the letter at the right index is a vowel, increase the current number of vowels
    if (vowels.test(s.charAt(rightIndex))) {
      currentVowels++;
    }

    // After the first substirng with length k (the right index reaches k)
    if (rightIndex >= k) {
      // If the letter at the left index is a vowel, decrease the current number of vowels
      if (vowels.test(s.charAt(leftIndex))) {
        currentVowels--;
      }

      // Move the left index
      leftIndex++;
    }

    // If the current number of vowels is equal to k, return the current number of vowels
    // because that means is would be the maximum number of vowels
    // Otherwise, update the maximum number of vowels
    if (currentVowels === k) {
      return currentVowels;
    } else {
      maxVowels = Math.max(maxVowels, currentVowels);
    }
  }

  // Return the maximum number of vowels
  return maxVowels;
};

// The time complexity of this solution is O(n), where n is the length of the input string `s`.
// This is because we iterate through the string once, and for each character,
// we perform constant time operations such as checking if it is a vowel and updating the currentVowels count.
// The space complexity is O(1)
// because we only use a constant amount of extra space to store the maximum number of vowels, the current number of vowels,
// and the left and right indices.
// The space used does not depend on the size of the input string.
