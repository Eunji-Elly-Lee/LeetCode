// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// Array / Binary Search / Divide and Conquer

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Get the lengths of the two input arrays
  let nums1Length = nums1.length;
  let nums2Length = nums2.length;

  // If nums1 is longer, swap the arrays to ensure nums1 is always the shorter or equal length array for efficiency
  if (nums1Length > nums2Length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  // Initialize variables for binary search
  let left = 0;
  let right = nums1Length;

  // Binary search
  while (left <= right) {
    // Calculate the middle index of nums1
    let middle1 = Math.floor((left + right) / 2);
    // Calculate the 'candidate' middle index for the combined array
    let middle2 = Math.floor((nums1Length + nums2Length + 1) / 2 - middle1);

    // Calculate the maximum value on the left side and the minimum value on the right side of nums1
    let maxLeft1 = middle1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[middle1 - 1];
    let minRight1 =
      middle1 === nums1Length ? Number.MAX_SAFE_INTEGER : nums1[middle1];

    // Calculate the maximum value on the left side and the minimum value on the right side of nums2
    let maxLeft2 = middle2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[middle2 - 1];
    let minRight2 =
      middle2 === nums2Length ? Number.MAX_SAFE_INTEGER : nums2[middle2];

    // Check conditions to find the median
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((nums1Length + nums2Length) % 2 == 0) {
        // If the total length of the arrays is even
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        // If the total length of the arrays is odd
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      // If maxLeft1 is greater than minRight2, move the right boundary to the left in nums1
      right = middle1 - 1;
    } else {
      // If maxLeft2 is greater than minRight1, move the left boundary to the right in nums1
      left = middle1 + 1;
    }
  }
};

// The time complexity of this algorithm is O(log(min(m, n))), where m and n are the lengths of the input arrays nums1 and nums2.
// This is because the algorithm uses binary search to find the correct partition of the two arrays,
// and the search space is reduced by half in each iteration.
// The space complexity of this algorithm is O(1) because it only uses a constant amount of extra space regardless of the input size.
