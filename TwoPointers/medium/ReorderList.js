// https://leetcode.com/problems/reorder-list/description/
// Linked List / Two Pointers / Stack / Recursion

// You are given the head of a singly linked-list.
// The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes.
// Only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // If the list has only one node, there is no need to reorder
  if (!head.next) {
    return;
  }

  // Find the middle of the linked list using the slow and fast pointers
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let previous = null;
  let current = slow;

  while (current) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  // Merge the first and reversed second halves according to the given condition
  let firstHalf = head;
  let secondHalf = previous;

  while (secondHalf.next) {
    const temp1 = firstHalf.next;
    const temp2 = secondHalf.next;
    firstHalf.next = secondHalf;
    secondHalf.next = temp1;
    firstHalf = temp1;
    secondHalf = temp2;
  }
};

// The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list.
// This is because we iterate through the linked list twice - once to find the middle node and once to reverse the second half and reorder the list.
// The space complexity is O(1) because we are using a constant amount of extra space regardless of the size of the input linked list.

// The time complexity of my initial approach is O(n) where n is the number of nodes in the linked list.
// This is because we iterate through the linked list once to store all the nodes in an array, and then we iterate through the array to reorder the nodes.
// The space complexity of my initial approach is also O(n) because we are storing all the nodes in an array.

// var reorderList = function (head) {
//     const nodes = [];
//     let current = head;

//     while (current) {
//       nodes.push(current);
//       current = current.next;
//     }

//     let left = 0;
//     let right = nodes.length - 1;

//     while (left < right) {
//       nodes[left].next = nodes[right];
//       left++;
//       nodes[right].next = nodes[left];
//       right--;
//     }

//     nodes[left].next = null; // Set the last node's next to null
//   };
