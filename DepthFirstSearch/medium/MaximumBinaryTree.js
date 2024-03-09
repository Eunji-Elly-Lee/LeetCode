// https://leetcode.com/problems/maximum-binary-tree/description/
// Array / Divide and Conquer / Stack / Tree / Monotonic Stack / Binary Tree

// You are given an integer array nums with no duplicates.
// A maximum binary tree can be built recursively from nums using the following algorithm:
// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the inputArray prefix to the left of the maximum value.
// Recursively build the right subtree on the inputArray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // Define the build tree function
  const buildTree = (inputArray) => {
    // If the input array is empty, return null
    if (inputArray.length === 0) {
      return null;
    }

    // Create and initialize variables to store the maximum value and its index
    let max = inputArray[0];
    let maxIndex = 0;

    // Iterate through the input array using a for loop
    for (let index = 0; index < inputArray.length; index++) {
      // If the current number is greater than the maximum value, update the maximum value and its index
      if (inputArray[index] > max) {
        max = inputArray[index];
        maxIndex = index;
      }
    }

    // Create a node with the maximum value
    const node = new TreeNode(max);
    // Traverse the left and right subarrays and set the left and right subtree using them
    node.left = buildTree(inputArray.slice(0, maxIndex));
    node.right = buildTree(inputArray.slice(maxIndex + 1));

    // Return the node
    return node;
  };

  // Create a root node using the build tree function
  const root = buildTree(nums);
  // Return the root node
  return root;
};

// The time complexity of this code is O(n log n) on average, where n is the length of the input array.
// In the worst case, it can be O(n^2) due to recursive calls,
// but the average case is O(n log n) as the array is divided in half during each recursive call.
// The space complexity of this code is O(n) due to the stack frames created by the recursive calls,
// which store the input array and other information for each level of recursion.
