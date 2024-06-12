// https://leetcode.com/problems/merge-k-sorted-lists/description/
// Linked List / Divide and Conquer / Heap (Priority Queue) / Merge Sort

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // If the input array is empty, return null
  if (lists.length === 0) return null;
  // If the input array has only one list, return it
  if (lists.length === 1) return lists[0];

  // Iterate through the input array using a while loop until it has only one list
  while (lists.length > 1) {
    // Create a new array to store the merged lists
    const mergedLists = [];

    // Iterate through the input array using a for loop
    for (let index = 0; index < lists.length; index += 2) {
      // Retrieve the two lists to merge
      const list1 = lists[index];
      const list2 = lists[index + 1];

      // Merge the two lists and push the result into the array of merged lists
      const mergedList = mergeTwoLists(list1, list2);
      mergedLists.push(mergedList);
    }

    // Update the input array with the merged lists
    lists = mergedLists;
  }

  // If the final merged list is empty, return null
  if (!lists[0]) {
    return null;
  }

  // Otherwise, return the final merged list
  return lists[0];
};

// Function to merge two lists
function mergeTwoLists(list1, list2) {
  // If the first list is empty, return the second list
  if (!list1) {
    return list2;
  }

  // If the second list is empty, return the first list
  if (!list2) {
    return list1;
  }

  // If the value of the first list's node is less than the second one's,
  // update the next node of the first list to the recursively returned node and return the first list
  // Otherwise, update the next node of the second list to the recursively returned node and return the second list
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

// The time complexity of the mergeKLists function is O(n log k),
// where n is the total number of nodes in all the linked lists and k is the number of linked lists in the input array.
// This is because at each iteration of the while loop, we are merging k/2 lists,
// and we continue this process until we have merged all lists into one.
// The mergeTwoLists function has a time complexity of O(n), where n is the total number of nodes in the two input lists.
// The space complexity of the mergeKLists function is O(1) because we are not using any additional data structures that grow with the input size.
// The mergeTwoLists function also has a space complexity of O(1) as it only uses a constant amount of space for recursive calls.
