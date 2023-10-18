// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
// Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // Create a set to store the types of stones that are jewels
  const jewelSet = new Set(jewels);
  // Create a counter to count the number of stones that are also jewels
  let counter = 0;

  // Iterate through the string of stones using a for...of loop
  for (const stone of stones) {
    // If a stone is in the jewel set, increase the counter
    if (jewelSet.has(stone)) {
      counter++;
    }
  }

  // Return the counter
  return counter;
};

// The time complexity of this code is O(n), where n is the sum of the lengths of the input strings `jewels` and `stones`.
// This is because the code iterates through both strings once.
// The space complexity is O(n), where n is the length of the input string `jewels`.
// This is because a set is created to store the `jewels`, which requires space proportional to the number of `jewels`.
