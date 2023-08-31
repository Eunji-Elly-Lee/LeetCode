// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length === 1) {
    // If the length of the array is 1, return the original array
    // beacuse the constraints say that it is guaranteed that the answer is unique
    return nums;
  }

  // Create an object that serves to store appearance frequency by number
  // For example, { 1: 3, 2: 2, 3: 1 }
  const elementCounter = {};

  // Count numbers in nums
  for (const number of nums) {
    if (elementCounter[number]) {
      elementCounter[number]++;
    } else {
      elementCounter[number] = 1;
    }
  }

  // Create an array of buckets, initialized with empty arrays
  // Each bucket will store numbers by frequency,
  // and the size of the buckets array is the length of the nums + 1
  // since the range of frequency cannot exceed the length of the nums array
  // For example,
  // buckets = [
  //   [],      frequency 0
  //   [3],     frequency 1
  //   [2],     frequency 2
  //   [1],     frequency 3
  // ]
  const buckets = new Array(nums.length + 1).fill().map(() => []);

  for (const number in elementCounter) {
    buckets[elementCounter[number]].push(number);
  }

  // Create an array containing the k most frequent elements
  const topKFrequent = [];

  // Add the most frequent number first from back
  // because buckets arrangements are arranged in reverse order by frequency
  for (let i = buckets.length - 1; i >= 0 && topKFrequent.length < k; i--) {
    topKFrequent.push(...buckets[i]);
  }

  return topKFrequent;
};

// The time complexity of this code is O(n), where n is the length of the input array nums.
// This is because the code iterates through the nums array once to count the frequency of each element,
// and then iterates through the elementCounter object to populate the buckets array.
// The final loop iterates through the buckets array,
// but the number of iterations is limited by the length of the buckets array, which is equal to the length of the input array nums.
// The space complexity of this code is O(n), where n is the length of the input array nums.
// This is because the code uses an object (elementCounter) to store the frequency of each element in nums,
// and the size of this object is proportional to the number of unique elements in nums.
// The buckets array also has a length equal to the length of nums, so the space complexity is also proportional to the length of nums.

// The time complexity of my initial funsction is O(n log n), where n is the length of the input array nums.
// This is because the code first iterates through the nums array to count the frequency of each element, which takes O(n) time.
// Then, it sorts the elementCounter object based on the frequency, which takes O(n log n) time.
// Finally, it iterates through the sortedCounter object to retrieve the top k frequent elements, which takes O(k) time.
// Since k is typically smaller than n, the overall time complexity is dominated by the sorting step, resulting in O(n log n) time complexity.
// The space complexity of my initial funsction is O(n), where n is the number of unique elements in the input array nums.
// This is because the elementCounter object stores the frequency count of each element, which can have at most n entries.
// Additionally, the sortedCounter object and the topKFrequent array also have at most n entries. Therefore, the overall space complexity is O(n).

// if (nums.length === 1) {
//   return nums;
// }

// const elementCounter = {};

// for (const number of nums) {
//   if (elementCounter[number]) {
//     elementCounter[number]++;
//   } else {
//     elementCounter[number] = 1;
//   }
// }

// const sortedCounter = Object.fromEntries(
//   Object.entries(elementCounter).sort((a, b) => a[1] - b[1])
// );

// let topKFrequent = [];

// for (let index = 0; index < k; index++) {
//   topKFrequent.push(Object.keys(sortedCounter)[index]);
// }

// return topKFrequent;
