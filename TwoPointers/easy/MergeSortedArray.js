// https://leetcode.com/problems/merge-sorted-array/
// Array / Two Pointers / Sorting

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Create a pointer to indicate the current element of nums1, starting from the last element
  let pointerM = m - 1;
  // Create a pointer to indicate the current element of nums2, starting from the last element
  let pointerN = n - 1;
  // Create an index variable to indicate the current index of nums1, starting from the end of nums1
  let currentIndex = m + n - 1;

  // Iterate through the nums2 array using a while loop
  while (pointerN >= 0) {
    // Compare elements from nums1 and nums2, and replace the current element of nums1 with the larger one
    // After that, decrease the pointer of the larger element between nums1 and nums2
    if (pointerM >= 0 && nums1[pointerM] > nums2[pointerN]) {
      nums1[currentIndex] = nums1[pointerM];
      pointerM--;
    } else {
      nums1[currentIndex] = nums2[pointerN];
      pointerN--;
    }

    // Decrease the current index
    currentIndex--;
  }
};

// The time complexity of this code is O(n), where n n is the sum of the lengths of `nums1` and `nums2`.
// This is because the code iterates through both arrays once, comparing and merging the elements.
// The space complexity is O(1) because the code does not use any additional space that grows with the input size.
// It modifies the `nums1` array in place.
