// https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/
// Stack / Tree / Depth-First Search

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal.
// Each group of children is separated by the null value (See examples)
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  // If the root is null, return an empty array
  if (root === null) {
    return [];
  }

  // Create two arrays to store the postorder traversal of its nodes' values and each node
  const traversal = [];
  const stack = [];
  // Push the input root to the stack
  stack.push(root);

  // Traverse the tree until the stack is empty
  while (stack.length > 0) {
    // Initialize the current node by popping a node from the stack
    const current = stack.pop();
    // Insert the value of the current node at the beginning of the traversal array
    traversal.unshift(current.val);

    // Iterate through the children array of the current node
    for (const children of current.children) {
      // Push each child node to the stack
      stack.push(children);
    }
  }

  // Return the postorder traversal of its nodes' values
  return traversal;
};

// The time complexity of this postorder traversal algorithm is O(n), where n is the number of nodes in the tree.
// This is because we visit each node exactly once.
// The space complexity is also O(n), where n is the number of nodes in the tree.
// This is because we are using a stack to keep track of nodes to visit,
// and in the worst case scenario, the stack could contain all nodes of the tree.
