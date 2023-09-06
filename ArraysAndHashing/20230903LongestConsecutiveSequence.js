// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    // If the length of the array is 0, return 0
    return 0;
  }

  // Create a new Set from the array to remove duplicate elements
  const numberSet = new Set(nums);

  let longestSequence = 0;

  for (const number of numberSet) {
    if (!numberSet.has(number - 1)) {
      // If the previous number of the current number is not in the Set, it's the starting number of a consecutive elements sequence
      let startNumber = number;
      let currentSequence = 1;

      // Find consecutive numbers starting from the starting number
      while (numberSet.has(startNumber + 1)) {
        startNumber++;
        currentSequence++;
      }

      // Calculate whether the current sequence is the longest
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
};

// The time complexity of this code is O(n), where n is the length of the input array nums.
// This is because the code iterates through the array once to create a set, and then iterates through the set to find the longest sequence.
// Both of these iterations have a linear time complexity.
// The space complexity of this code is O(n), where n is the length of the input array nums.
// This is because the code creates a set to store the unique numbers from the array, and the size of the set will be at most n.
// Therefore, the space required is proportional to the size of the input array.
