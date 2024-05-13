// https://leetcode.com/problems/merge-two-sorted-lists/description/
// Linked List / Recursion

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // If one of the input nodes is null, return the other one
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  // If the value of list1 is less than list2's,
  // update the next node of list1 to the return node from the initial function recursively and return list1
  // Otherwise, update the next node of list2 to the return node from the initial function recursively and return list2
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// The time complexity of this solution is O(n + m), where n and m are the lengths of `list1` and `list2` respectively.
// This is because we are recursively traversing both lists until we reach the end of one of them.
// The space complexity is also O(n + m)
// because the recursive calls will use additional space on the call stack proportional to the lengths of the input lists.
