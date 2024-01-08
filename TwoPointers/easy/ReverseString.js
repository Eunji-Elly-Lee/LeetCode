// https://leetcode.com/problems/reverse-string/
// Two Pointers / String

// Write a function that reverses a string.
// The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // Create and initialize pointers
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  // Iterate through the input string using a while loop
  while (leftPointer < rightPointer) {
    // Swap characters, and move the pointers in each direction
    const temp = s[leftPointer];
    s[leftPointer] = s[rightPointer];
    s[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
};

// The time complexity of this code is O(n), where n is the length of the string `s`.
// This is because the while loop iterates through half of the string, swapping characters at each iteration.
// The space complexity of this code is O(1) because it uses a constant amount of extra space.
// The variables `leftPointer`, `rightPointer`, and `temp` all take up constant space, regardless of the size of the input string.
