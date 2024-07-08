// https://leetcode.com/problems/balanced-binary-tree/description/
// Tree / Depth-First Search / Binary Tree

// Given a binary tree, determine if it is height-balanced.

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Define a function to calculate the height of the tree
  const height = (node) => {
    // If the current node is null, return 0
    if (node === null) {
      return 0;
    }

    // Recursively calculate the height the left and right subtrees
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    // If the subtrees are not balanced, or the current node is not balanced, return -1
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }

    // Return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // If the helper function does not return -1, return true because the tree is balanced
  return height(root) !== -1;
};

// The time complexity of this solution is O(n), where n is the number of nodes in the binary tree.
// This is because we visit each node exactly once.
// The space complexity is O(h), where h is the height of the binary tree.
// This is because the recursive calls to the height function will use space on the call stack proportional to the height of the tree.
// In the worst case scenario, where the tree is completely unbalanced, the space complexity could be O(n).
