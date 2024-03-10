// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/
// Array / Stack / Tree / Binary Search Tree / Monotonic Stack / Binary Tree

// Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree),
// construct the tree and return its root.
// It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
// A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val,
// and any descendant of Node.right has a value strictly greater than Node.val.
// A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  // Define the construct tree function
  const constructTree = (inputArray) => {
    // If the input array is empty, return null
    if (inputArray.length === 0) {
      return null;
    }

    // Create and initialize a node whit the first element of the input array
    const node = new TreeNode(inputArray[0]);
    // Create two empty arrays to store the left and right subtrees
    const left = [];
    const right = [];

    // Iterate through the input array using a for loop
    for (let index = 1; index < inputArray.length; index++) {
      // If the current element is smaller than the node vale, push it to the left subtree
      // Otherwise, push the current element to the right subtree
      if (inputArray[index] < node.val) {
        left.push(inputArray[index]);
      } else {
        right.push(inputArray[index]);
      }
    }

    // Recursively set the left and right subtrees
    node.left = constructTree(left);
    node.right = constructTree(right);

    // Return the node
    return node;
  };

  // Create a root node using the construct tree function and return it
  const root = constructTree(preorder);
  return root;
};

// The time complexity of this solution is O(n^2) where n is the number of nodes in the binary tree.
// This is because for each node in the tree, we are iterating through the entire input array to separate the left and right subtrees.
// The space complexity is O(n) where n is the number of nodes in the binary tree.
// This is because we are creating new arrays for the left and right subtrees at each node,
// which can potentially store all the nodes in the tree.
