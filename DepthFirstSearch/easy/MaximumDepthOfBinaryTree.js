// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
// Tree / Depth-First Search / Breadth-First Search / Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
 * @return {number}
 */
var maxDepth = function (root) {
  // If the input node of the tree is null, return 0
  if (root === null) {
    return 0;
  }

  // Recursively find the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth, which is the greater of the left and right subtree depths, plus 1 for the current root node
  return Math.max(leftDepth, rightDepth) + 1;
};

// The time complexity of this solution is O(n), where n is the number of nodes in the binary tree.
// This is because we are visiting each node exactly once in a depth-first manner.
// The space complexity is also O(n) in the worst case, as the recursion stack can go as deep as the height of the tree,
// which can be n in the case of a skewed tree.
