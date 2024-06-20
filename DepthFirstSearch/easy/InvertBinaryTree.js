// https://leetcode.com/problems/invert-binary-tree/description/
// Tree / Depth-First Search / Breadth-First Search / Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // If the input node of the tree is null, return null
  if (root === null) {
    return null;
  }

  // Swap the left and right children of the current node
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  // Return the current node of the inverted tree
  return root;
};

// The time complexity of this solution is O(n), where n is the number of nodes in the binary tree.
// This is because we are visiting each node exactly once in a depth-first manner.
// The space complexity is also O(n) due to the recursive calls on the call stack.
// In the worst case scenario, the call stack could have at most n/2 recursive calls, where n is the number of nodes in the binary tree.
