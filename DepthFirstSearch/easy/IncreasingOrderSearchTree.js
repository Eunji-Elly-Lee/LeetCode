// https://leetcode.com/problems/increasing-order-search-tree/description/
// Stack / Tree / Depth-First Search / Binary Search Tree / Binary Tree

// Given the root of a binary search tree,
// rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,
// and every node has no left child and only one right child.

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
var increasingBST = function (root) {
  // Create a new root node
  const newRoot = new TreeNode();
  // Create and initialize the current node as the new root node
  let current = newRoot;

  // Define the rearrange tree function
  const rearrangeTree = (node) => {
    // If the left subtree of the input node is not null, traverse it
    if (node.left !== null) {
      rearrangeTree(node.left);
    }

    // Set the right subtree of the current node with the value of the input node
    // and update the current node to it
    current.right = new TreeNode(node.val);
    current = current.right;

    // If the right subtree of the input node is not null, traverse it
    if (node.right !== null) {
      rearrangeTree(node.right);
    }
  };

  // Traverse the input root node
  rearrangeTree(root);

  // Return the right subtree of the new root node
  return newRoot.right;
};

// Time Complexity of this code is O(n) because the `rearrangeTree` function traverses the entire binary search tree once.
// In the worst case, it visits every node exactly once.
// Since the number of nodes visited is proportional to the number of elements (n) in the tree, the time complexity is O(n).
// Space Complexity of this code is O(n) because the function relies on recursion, which utilizes the call stack.
// In the worst-case scenario, the call stack can grow as deep as the tree's height.
// For a balanced tree, the height is proportional to n (number of elements).
// Therefore, the space complexity is O(n) due to the call stack usage.

// Time complexity of my initial code is O(n), where n is the number of nodes in the input tree.
// This is due to the recursive calls in `addToStack` visiting each node once,
// and the subsequent loop iterating through the stack of values once.
// Space complexity of my initial code is O(n), primarily due to the stack array storing up to n node values in the worst case of a skewed tree.

// var increasingBST = function (root) {
//   const stack = [];

//   const addToStack = (node) => {
//     if (node.left !== null) {
//       addToStack(node.left);
//     }

//     stack.push(node.val);

//     if (node.right !== null) {
//       addToStack(node.right);
//     }
//   };

//   addToStack(root);

//   const newRoot = new TreeNode(stack[0]);
//   let current = newRoot;

//   for (let index = 1; index < stack.length; index++) {
//     current.right = new TreeNode(stack[index]);
//     current = current.right;
//   }

//   return newRoot;
// };
