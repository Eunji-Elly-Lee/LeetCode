// https://leetcode.com/problems/add-two-numbers/description/
// Linked List / Math / Recursion

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Create a dummy node that points to the head of the new linked list for the sum of the two input lists
  let dummy = new ListNode(0);
  let current = dummy;
  // Create and initialize a variable to store the rest value of the sum of two nodes
  let rest = 0;

  // Iterate through the input lists using a while loop
  // If the rest is not 0, it means that the last sum value was greater than or equal to 10, so create a new node for the value
  while (l1 || l2 || rest !== 0) {
    // Calculate the sum of the current two nodes and the rest
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rest;
    // Update the rest using the current sum
    rest = Math.floor(sum / 10);
    // Create the next node for the current sum
    current.next = new ListNode(sum % 10);
    // Move to the next node in the result list
    current = current.next;

    // If the current nodes are not null, move to the next nodes in each list
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  // Return the head of the new linked list, which is the next node of the dummy node
  return dummy.next;
};

// The time complexity of this function is O(max(m, n)), where m and n are the lengths of the input linked lists l1 and l2.
// This is because we iterate through both linked lists simultaneously, and the loop will run for the length of the longer linked list.
// The space complexity is O(max(m, n)), as we are creating a new linked list to store the result,
// which will have a length of at most max(m, n) + 1.
// Additionally, we are using a constant amount of extra space for variables like dummy, current, and rest.
