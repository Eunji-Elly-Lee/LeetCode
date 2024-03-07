// https://leetcode.com/problems/range-sum-of-bst/description/
// Tree / Depth-First Search / Binary Search Tree / Binary Tree

// Given the root node of a binary search tree and two integers low and high,
// return the sum of values of all nodes with a value in the inclusive range [low, high].

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // Create and initialize the sum to 0
  let sum = 0;

  // Define the calculate sum function to traverse through the tree
  const calculateSum = (node) => {
    // If the value of the current node is in the inclusive range, add it to sum
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    // If the left subtree of the input node is not null, traverse through it
    if (node.left !== null) {
      calculateSum(node.left);
    }

    // If the right subtree of the input node is not null, traverse through it
    if (node.right !== null) {
      calculateSum(node.right);
    }
  };

  // Traverse through the input root node
  calculateSum(root);

  // Return the final sum
  return sum;
};

// The time complexity of this solution is O(n), where n is the number of nodes in the binary search tree.
// This is because we are visiting each node once in a depth-first search manner.
// The space complexity is also O(n) in the worst case, as the recursion stack can go as deep as the height of the tree,
// which is O(n) in the worst case for an unbalanced tree.
