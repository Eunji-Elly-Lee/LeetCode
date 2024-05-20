// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Linked List / Two Pointers

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Create a dummy node that points to the head of the list
  let dummy = new ListNode(0);
  dummy.next = head;

  // Initialize two pointers, both starting at the dummy node
  let first = dummy;
  let second = dummy;

  // Move the first pointer n + 1 steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers until the first pointer reaches the end of the list
  // The second pointer will be just before the nth node from the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node from the end, which is the next node of the second pointer
  second.next = second.next.next;

  // Return the head of the modified list, which is the next node of the dummy node
  return dummy.next;
};

// The time complexity of this solution is O(n) where n is the number of nodes in the linked list.
// This is because we iterate through the linked list once.
// The space complexity is O(1) because we are using a constant amount of extra space regardless of the size of the input.
