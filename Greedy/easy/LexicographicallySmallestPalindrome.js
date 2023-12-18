// https://leetcode.com/problems/lexicographically-smallest-palindrome/
// Two Pointers / String / Greedy

// You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it.
// In one operation, you can replace a character in s with another lowercase English letter.
// Your task is to make s a palindrome with the minimum number of operations possible.
// If there are multiple palindromes that can be made using the minimum number of operations,
// make the lexicographically smallest one.
// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ,
// string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
// Return the resulting palindrome string.

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  // Create an array of strings to store the characters of the input string
  let stringArray = s.split("");

  // Create and initialize the left and right pointers
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  // Iterate through the array of strings using a while loop
  while (leftPointer < rightPointer) {
    // If the current characters are different, update the larger character with the lexicographically smaller one
    if (stringArray[leftPointer] !== stringArray[rightPointer]) {
      if (stringArray[leftPointer] < stringArray[rightPointer]) {
        stringArray[rightPointer] = stringArray[leftPointer];
      } else {
        stringArray[leftPointer] = stringArray[rightPointer];
      }
    }

    // Move to the next positions
    leftPointer++;
    rightPointer--;
  }

  // Return the updated array as a string
  return stringArray.join("");
};

// The time complexity of this code is O(n), where n is the length of the `stringArray`.
// This is because the code iterates through the `stringArray` once, performing a constant number of operations for each element.
// The space complexity of this code is O(n), where n is the length of the `stringArray`.
// This is because the code creates a new array by calling the join() method on the `stringArray`,
// which requires O(n) space to store the resulting string.
