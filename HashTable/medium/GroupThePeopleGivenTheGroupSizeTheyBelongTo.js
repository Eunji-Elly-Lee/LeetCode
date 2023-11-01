// There are n people that are split into some unknown number of groups.
// Each person is labeled with a unique ID from 0 to n - 1.
// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
// For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group.
// If there are multiple answers, return any of them.
// It is guaranteed that there will be at least one valid solution for the given input.

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  // Create an object to store groups by their sizes
  const groupBySize = {};
  // Create an array to store a list of groups
  const groupList = [];

  // Iterate through the input array using a for loop
  for (let index = 0; index < groupSizes.length; index++) {
    // Set a group size variable using the current element which represents a group size
    const groupSize = groupSizes[index];

    // If this group size isn't in the object, add the size with an empty array as its value
    if (!(groupSize in groupBySize)) {
      groupBySize[groupSize] = [];
    }

    // Push the current index to the array of the object's current group size
    groupBySize[groupSize].push(index);

    // If the length of the current group size array is the same as the group size,
    // push the array to the list of groups and initialize the current group size array
    if (groupBySize[groupSize].length === groupSize) {
      groupList.push(groupBySize[groupSize]);
      groupBySize[groupSize] = [];
    }
  }

  // Return the list of groups
  return groupList;
};

// The time complexity of this code is O(n), where n is the length of the input array `groupSizes`.
// This is because the code iterates through each element in the `groupSizes` once.
// The space complexity of this code is O(n), where n is the length of the input array `groupSizes`.
// This is because the code uses an object `groupBySize` and an array `groupList`.
// The space required by this object and array depends on the length of the input array `groupSizes`.
