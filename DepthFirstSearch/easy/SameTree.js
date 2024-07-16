// https://leetcode.com/problems/same-tree/description/
// Tree / Depth-First Search / Breadth-First Search / Binary Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // If both input nodes are null, return true because it means we reached the end of both trees
  if (p === null && q === null) {
    return true;
  }

  // If one of the input nodes is null or their values are not the same, return false because the trees are not the same
  if (p === null || q === null || p.val !== q.val) {
    return false;
  }

  // Recursively check if the left and right subtrees are the same
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// The time complexity of this algorithm is O(n), where n is the number of nodes in the tree.
// This is because we are recursively traversing each node in both trees to compare their values.
// The space complexity is also O(n) in the worst case scenario,
// as the recursive calls will consume space on the call stack proportional to the height of the tree.
