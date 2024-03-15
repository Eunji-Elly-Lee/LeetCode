// https://leetcode.com/problems/top-k-frequent-elements/description/
// Array / Hash Table / Divide and Conquer / Sorting / Heap (Priority Queue) / Bucket Sort / Counting / Quickselect

// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Create a map to store numbers with their frequencies
  const numberMap = new Map();

  // Iterate through the input array using a for...of loop
  for (const number of nums) {
    // Update the number map with the current number and its frequency
    if (numberMap.has(number)) {
      numberMap.set(number, numberMap.get(number) + 1);
    } else {
      numberMap.set(number, 1);
    }
  }

  // Create a map to store frequency cases of the input array
  const bucketMap = new Map();

  // Initialize the bucket map with possible frequencies
  for (let frequency = nums.length; frequency > 0; frequency--) {
    bucketMap.set(frequency, []);
  }

  // Iterate through the number map using a for...of loop
  for (const number of numberMap) {
    // Push the current number into its corresponding frequency array in the bucket map
    bucketMap.get(numberMap.get(number[0])).push(number[0]);
  }

  // Create an empty answer array
  const answer = [];

  // Iterate through the bucket map using a for...of loop
  for (const frequency of bucketMap) {
    // If the current frequency array is not empty, push its values into the answer array
    if (bucketMap.get(frequency[0]).length !== 0) {
      answer.push(...bucketMap.get(frequency[0]));

      // If the length of the answer array is equal to k, return the answer array
      if (answer.length === k) {
        return answer;
      }
    }
  }
};

// The time complexity of this solution is O(n), where n is the number of elements in the input array `nums`.
// This is because we iterate through the input array once to count the frequency of each number
// and then iterate through the frequency map to build the bucket map.
// The space complexity of this solution is O(n), where n is the number of elements in the input array `nums`.
// This is because we use a map to store the frequency of each number, a map to store the buckets, and an array to store the final answer.
