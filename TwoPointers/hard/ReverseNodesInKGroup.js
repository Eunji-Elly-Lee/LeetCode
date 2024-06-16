// https://leetcode.com/problems/reverse-nodes-in-k-group/description/
// Linked List / Recursion

// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list.
// If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.
// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // Create a dummy node that points to the head of the modified linked list
  const dummy = new ListNode(0);
  dummy.next = head;

  // Create and initialize pointers for the previous, current, and next nodes
  let previous = dummy;
  let current = dummy;
  let next = dummy;

  // Calculate the number of nodes in the input list
  let numberOfNodes = 0;
  while (current.next !== null) {
    current = current.next;
    numberOfNodes++;
  }

  // Iterate through the input list using a while loop until there are fewer than k nodes left  
  while (numberOfNodes >= k) {
    // Set the current and next nodes
    current = previous.next;
    next = current.next;

    // Revers the k nodes
    for (let x = 1; x < k; x++) {
      current.next = next.next;
      next.next = previous.next;
      previous.next = next;
      next = current.next;
    }

    // Reset the previous node to the current node
    previous = current;
    // Update the number of remaining nodes by subtracting k
    numberOfNodes -= k;
  }

  // Return the head of the modified list, which is the next node of the dummy node
  return dummy.next;
};

// The time complexity of this solution is O(n), where n is the number of nodes in the linked list.
// This is because we iterate through the entire linked list once to count the number of nodes,
// and then iterate through the list again in chunks of k to reverse the groups.
// The space complexity is O(1) because we are using a constant amount of extra space, regardless of the size of the input linked list.
// We are only using a few extra pointers to keep track of the nodes during the reversal process.
