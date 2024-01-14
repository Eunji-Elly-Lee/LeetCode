// https://leetcode.com/problems/interval-list-intersections/description/
// Array / Two Pointers

// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj].
// Each list of intervals is pairwise disjoint and in sorted order.
// Return the intersection of these two interval lists.
// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval.
// For example, the intersection of [1, 3] and [2, 4] is [2, 3].

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  // Create and initialize a new array to store intersections between the two lists and each pointer
  const intersections = [];
  let firstPointer = 0;
  let secondPointer = 0;

  // Iterate through the input lists using a while loop
  while (firstPointer < firstList.length && secondPointer < secondList.length) {
    // Check for overlap using the current end elements in both lists
    if (
      firstList[firstPointer][1] >= secondList[secondPointer][0] &&
      secondList[secondPointer][1] >= firstList[firstPointer][0]
    ) {
      // Calculate the intersection interval and push the values into the intersection array
      intersections.push([
        Math.max(firstList[firstPointer][0], secondList[secondPointer][0]),
        Math.min(firstList[firstPointer][1], secondList[secondPointer][1]),
      ]);
    }

    // Move the pointer to the next interval of the list with the smaller end element
    if (firstList[firstPointer][1] < secondList[secondPointer][1]) {
      firstPointer++;
    } else {
      secondPointer++;
    }
  }

  // Return the intersection array
  return intersections;
};

// The time complexity of this code is O(n), where n is the sum of the lengths of the `firstList` and `secondList`.
// This is because the while loop will iterate until either the `firstPointer` reaches the end of the `firstList`
// or the `secondPointer` reaches the end of the `secondList`.
// In the worst case, both pointers will iterate through the entire lists, resulting in a linear time complexity.
// The space complexity of this code is O(n), where n is the number of intersections between the two lists.
// This is because the `intersections` array will store all the intersections found.
// In the worst case, if there are no intersections, the array will be empty.
// Therefore, the space complexity is dependent on the number of intersections.
