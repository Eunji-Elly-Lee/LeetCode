// https://leetcode.com/problems/di-string-match/
// Array / Two Pointers / String / Greedy

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it.
// If there are multiple valid permutations perm, return any of them.

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  // Create and initialize an empty array for the permutation
  // and the variables for the minimum and maximum integers
  const permutation = [];
  let minimumInteger = 0;
  let maximumInteger = s.length;

  // Iterate through the input string using a for...of loop
  for (const letter of s) {
    // If the current letter is I, push the minimum integer to the permutation and increase the minimum integer
    // Otherwise push the maximum integer to the permutation and decrease the maximum integer
    if (letter === "I") {
      permutation.push(minimumInteger);
      minimumInteger++;
    } else {
      permutation.push(maximumInteger);
      maximumInteger--;
    }
  }

  // Push the remaining integer to the permutation and return it
  permutation.push(minimumInteger);
  return permutation;
};

// The time complexity of this code is O(n), where n is the length of the input string `s`.
// This is because the code iterates through each character in the string once.
// The space complexity of this code is O(n), where n is the length of the input string `s`.
// This is because the code creates an array called `permutation` that can potentially store n elements,
// depending on the characters in the input string.
// Additionally, the code creates two integer variables, `minimumInteger` and `maximumInteger`, which take up constant space.
// Therefore, the overall space complexity is dominated by the size of the `permutation` array.
