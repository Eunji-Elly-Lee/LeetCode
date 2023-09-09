// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 1) {
    // If the length is 1, it's already a palindrome
    return true;
  }

  // Convert all uppercase letters into lowercase letters and remove non-alpanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Compare characters from both ends of the string
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// The time complexity of this code is O(n), where n is the length of the input string.
// This is because the code iterates through the string once to remove non-alphanumeric characters and convert it to lowercase,
// and then iterates through half of the modified string to check if it is a palindrome.
// The space complexity of this code is O(1), as it only uses a constant amount of additional space to store the left and right pointers.
// The modified string is created in-place and does not require any additional space.

// The time complexity of my initial code is O(n), where n is the length of the input string s.
// This is because the code iterates through the string once, comparing characters at the left and right pointers.
// The while loops inside the main while loop also iterate through the string, but they do not add additional iterations since they are nested.
// The space complexity of my initial code is O(1), as it uses a constant amount of extra space.
// The variables left, right, and the temporary variables used in the while loops do not depend on the size of the input string.

// if (s.length === 1) {
//   return true;
// }

// s = s.toLowerCase();
// let left = 0;
// let right = s.length - 1;

// while (left < right) {
//   while (!s.charAt(left).match(/^[a-z0-9]+$/)) {
//     left++;
//   }

//   while (!s.charAt(right).match(/^[a-z0-9]+$/)) {
//     right--;
//   }

//   if (s.charAt(left) !== s.charAt(right)) {
//     return false;
//   }

//   left++;
//   right--;
// }

// return true;
