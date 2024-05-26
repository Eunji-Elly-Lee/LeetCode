// https://leetcode.com/problems/copy-list-with-random-pointer/description/
// Hash Table / Linked List

// A linked list of length n is given such that each node contains an additional random pointer,
// which could point to any node in the list, or null.
// Construct a deep copy of the list.
// The deep copy should consist of exactly n brand new nodes,
// where each new node has its value set to the value of its corresponding original node.
// Both the next and random pointer of the new nodes should point to new nodes in the copied list
// such that the pointers in the original list and copied list represent the same list state.
// None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y,
// then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes.
// Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // If the head node is null, return null
  if (!head) {
    return null;
  }

  // Create a new map to store the original nodes and copied nodes
  const map = new Map();

  // Create and initailize the current node variable
  let current = head;

  // Iterate through the input linked list using a while loop to copy the linked list
  while (current) {
    // Create a new copied node and set it as the value for the current node in the map
    const newNode = new Node(current.val);
    map.set(current, newNode);
    current = current.next;
  }

  // Reset the current node to the head node
  current = head;

  // Iterate through the input linked list using a while loop to assign the next and random pointers
  while (current) {
    // Get the copied node corresponding to the current node
    const copyNode = map.get(current);

    // If the current node has a next node, set the next pointer of the copied node
    if (current.next) {
      copyNode.next = map.get(current.next);
    }

    // If the current node has a random pointer, set the random pointer of the copied node
    if (current.random) {
      copyNode.random = map.get(current.random);
    }

    current = current.next;
  }

  // Return the head of the copied list
  return map.get(head);
};

// The time complexity of this solution is O(n) where n is the number of nodes in the linked list.
// This is because we iterate through the linked list twice:
// once to create new nodes and store them in a map, and once to update the next and random pointers of the new nodes.
// The space complexity is also O(n) because we are using a map to store the mapping between original nodes and their corresponding new nodes.
// This map will have at most n entries, where n is the number of nodes in the linked list.
