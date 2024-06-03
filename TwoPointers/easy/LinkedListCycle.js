// https://leetcode.com/problems/linked-list-cycle/description/
// Hash Table / Linked List / Two Pointers

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
// Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list.
// Otherwise, return false.
// Follow up: Can you solve it using O(1) (i.e. constant) memory?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // If there is no node or only one node, it means there is no cycle in the linked list
  if (!head || !head.next) {
    return false;
  }

  // Create and initialize slow and fast pointers
  let slow = head;
  let fast = head.next;

  // Iterate through the linked list using a while loop until the two pointers meet at the same node
  while (slow !== fast) {
    // If the fast pointer reaches the end, it means there is no cycle in the linked list
    if (!fast || !fast.next) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  // If the two pointers meet at the same node, it means there is a cycle in the linked list
  return true;
};

// The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list.
// This is because the algorithm will have to traverse the entire linked list once to detect a cycle.
// The space complexity of this algorithm is O(1)
// because it uses only a constant amount of extra space regardless of the size of the input linked list.
// This is because the algorithm only uses two pointers (slow and fast) to detect the cycle and does not use any additional data structures.
