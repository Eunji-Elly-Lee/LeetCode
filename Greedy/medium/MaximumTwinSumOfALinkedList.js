// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/
// Linked List / Two Pointers / Stack

// In a linked list of size n, where n is even,
// the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2.
// These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // Create and initialize the size of the linked list as 0 and the current node as the given head
  let listSize = 0;
  let current = head;

  // Iterate through the linked list using a while loop to calculate the size of the list
  while (current) {
    listSize++;
    current = current.next;
  }

  // Create and initialize an empty array to store the values of the first half of the linked list
  // and the maximum sum as 0
  const stackArray = [];
  let maximumSum = 0;

  // Reset the current node as the given head
  current = head;

  // Iterate through the linked list using a for loop
  for (let index = 0; index < listSize; index++) {
    // If the current index is smaller than half of the linked list, push the current value into the stack array
    // Otherwise, update the maximum sum to be the higher value between the maximum sum and the current twin sum
    if (index <= listSize / 2 - 1) {
      stackArray.push(current.val);
    } else {
      maximumSum = Math.max(maximumSum, current.val + stackArray.pop());
    }

    // Move to the next node
    current = current.next;
  }

  // Return the maximum sum
  return maximumSum;
};

// The time complexity of this code is O(n), where n is the size of the linked list.
// This is because we iterate through the linked list twice - once to calculate the size of the list, and once to calculate the maximum sum.
// Both iterations have a linear time complexity.
// The space complexity of this code is O(n), where n is the size of the linked list.
// This is because we use a `stackArray` to store the values of the first half of the linked list.
//  The size of the `stackArray` will be at most half the size of the linked list, so the space complexity is linear.
