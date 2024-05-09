// https://leetcode.com/problems/reverse-linked-list/description/
// Linked List / Recursion

// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Follow up: A linked list can be reversed either iteratively or recursively.
// Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // If the input head node represents an empty list or has only one node, return the head node itself
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse the rest of the list
  const reversedNode = reverseList(head.next);

  // Update the next pointers to reverse the list
  head.next.next = head;
  head.next = null;

  // Return the newly reversed head node
  return reversedNode;
};

// The time complexity of this code, which reverses recursively, is O(n) where n is the number of nodes in the linked list.
// This is because the function recursively traverses through each node in the linked list once.
// The space complexity is also O(n) due to the recursive calls.
// In the worst case scenario, the function will have n recursive calls on the call stack, where n is the number of nodes in the linked list.

// The time complexity of this code, which reverses iteratively, is O(n) where n is the number of nodes in the linked list.
// This is because we iterate through each node in the linked list once to reverse the list.
// The space complexity is O(1) because we are using a constant amount of extra space regardless of the size of the input linked list.
// We are only using a few extra variables to keep track of the previous, current, and next nodes during the reversal process.

// var reverseList = function (head) {
//   // Create a variable to store the previous node
//   let previous = null;
//   // Create and initialize the current node variable with the input head node
//   let current = head;

//   // Iterate through the linked list using a while loop until the current node is not null
//   while (current !== null) {
//     // Store the next node
//     const nextNode = current.next;

//     // Set the next node as the previous node
//     current.next = previous;
//     // Update the previous node to the current node
//     previous = current;
//     // Update the current node to the next node
//     current = nextNode;
//   }

//   // Return the previous node as the new head of the reversed list
//   return previous;
// };
