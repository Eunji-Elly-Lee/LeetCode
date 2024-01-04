// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Two Pointers / String

// Given a string s,
//reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Split the input string into an array of words
  const sentenceArray = s.split(" ");

  // Iterate through each word in the array using a for loop
  for (let index = 0; index < sentenceArray.length; index++) {
    // Reverse the characters of the current word and update the array
    const reverseWord = sentenceArray[index].split("").reverse().join("");
    sentenceArray[index] = reverseWord;
  }

  // Return the string with reversed words
  return sentenceArray.join(" ");
};

// The time complexity of this function is O(n), where n is the length of the input string `s`.
// This is because the function splits the string into an array of words, and then iterates over each word to reverse it.
// The split operation takes O(n) time, and the reverse and join operations for each word also take O(n) time.
// Therefore, the overall time complexity is O(n).
// The space complexity of this function is O(n), where n is the length of the input string `s`.
// This is because the function creates a new array to store the words in the sentence, which takes O(n) space.
// Additionally, the function creates a new string to store the reversed sentence, which also takes O(n) space.
// Therefore, the overall space complexity is O(n).
