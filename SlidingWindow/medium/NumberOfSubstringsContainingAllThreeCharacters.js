// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/
// Hash Table / String / Sliding Window

// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  // Create and initialize the counter object for each character with initial counts set to 0
  const counterObject = { a: 0, b: 0, c: 0 };

  // Create and initialize variables for the number of substrings and the left index
  let numberOfSubstrings = 0;
  let leftIndex = 0;

  // Iterate through the input string using a for loop with the right index
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    // Increase the count of the character at the current right index in the counter object
    counterObject[s.charAt(rightIndex)]++;

    // Move the left index to find the minimum substring containing at least one occurrence of all characters
    while (counterObject.a > 0 && counterObject.b > 0 && counterObject.c > 0) {
      counterObject[s.charAt(leftIndex)]--;
      leftIndex++;
    }

    // Add the length of the current valid substrings to the number of substrings
    numberOfSubstrings += leftIndex;
  }

  // Return the number of substrings
  return numberOfSubstrings;
};

// The time complexity of this code is O(n), where n is the length of the string `s`.
// This is because we iterate through the string once with the `rightIndex` variable.
// The space complexity of this code is O(1).
// This is because we only use a constant amount of extra space to store the `counterObject` and a few other variables.
// The space used does not depend on the size of the input string.

// The time complexity of my initial code is O(n^3), where n is the length of the input string `s`.
// This is because there are two nested loops, each iterating over the length of the string, resulting in a total of n^2 iterations.
// Additionally, within the inner loop,
// the code slices a substring of length 3 and creates a set from it, which has a time complexity of O(1).
// Therefore, the overall time complexity is O(n^3).
// The space complexity of this code is O(1).
// This is because the code only uses a constant amount of additional space, regardless of the size of the input string.
// The only additional space used is for the variable `numberOfSubstrings`, which is a single integer.

// var numberOfSubstrings = function (s) {
//   let numberOfSubstrings = 0;

//   for (let leftIndex = 0; leftIndex <= s.length - 2; leftIndex++) {
//     for (
//       let rightIndex = leftIndex + 2;
//       rightIndex <= s.length - 1;
//       rightIndex++
//     ) {
//       if (new Set(s.slice(leftIndex, rightIndex + 1)).size === 3) {
//         numberOfSubstrings++;
//       }
//     }
//   }

//   return numberOfSubstrings;
// };
