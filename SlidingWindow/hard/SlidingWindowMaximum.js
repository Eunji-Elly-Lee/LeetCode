// https://leetcode.com/problems/sliding-window-maximum/description/
// Array / Queue / Sliding Window / Heap (Priority Queue) / Monotonic Queue

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.
// Return the max sliding window.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // Create an empty array to store the answer and a queue for tracking the maximum number in the window
  const answer = [];
  const queue = [];

  // Iterate through the input array using a for loop
  for (let index = 0; index < nums.length; index++) {
    // If the first index in the queue is not included in the window, remove it
    if (queue.length > 0 && queue[0] <= index - k) {
      queue.shift();
    }

    // Remove numbers from the end of the queue if they are smaller than or equal to the current number
    while (queue.length > 0 && nums[index] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    // Push the current index into the queue
    queue.push(index);

    // If window is fully formed, push the maximum number to the answer array
    if (index >= k - 1) {
      answer.push(nums[queue[0]]);
    }
  }

  // Return the final answer array
  return answer;
};

// The time complexity of this solution is O(n) where n is the number of elements in the input array `nums`.
// This is because we iterate through the array once, and for each element, we perform constant time operations.
// The space complexity is O(k) where k is the size of the sliding window.
// This is because we maintain a queue of at most k elements to keep track of the maximum element in the current window.
