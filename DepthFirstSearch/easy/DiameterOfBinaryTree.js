// https://leetcode.com/problems/diameter-of-binary-tree/description/
// Tree / Depth-First Search / Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function (root) {
  // Create and initialize the diameter to 0
  let diameter = 0;

  // Define a function to calculate the depth of the tree
  const depth = (node) => {
    // If the current node is null, return 0
    if (node === null) {
      return 0;
    }

    // Recursively find the depth of the left and right subtrees
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // Update the diameter by comparing the current diameter with the path through the current node
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Return the maximum depth, which is the greater of the left and right subtree depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
  };

  // Traverse the tree starting from the root node
  depth(root);

  // Return the calculated diameter
  return diameter;
};

// The time complexity of this algorithm is O(n), where n is the number of nodes in the binary tree.
// This is because we are visiting each node of the tree once in order to calculate the depth of each subtree.
// The space complexity of this algorithm is O(n), where n is the number of nodes in the binary tree.
// This is because the depth function recursively calls itself for each node in the tree,
// leading to a recursive stack that can grow as large as the height of the tree.
