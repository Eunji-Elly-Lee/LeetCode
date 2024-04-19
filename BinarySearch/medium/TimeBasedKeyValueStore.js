// https://leetcode.com/problems/time-based-key-value-store/description/

// Hash Table / String / Binary Search / Design

// Design a time-based key-value data structure
// that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
// Implement the TimeMap class:
// TimeMap(): Initializes the object of the data structure.
// void set(String key, String value, int timestamp): Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp): Returns a value such that set was called previously, with timestamp_prev <= timestamp.
// If there are multiple such values, it returns the value associated with the largest timestamp_prev.
// If there are no values, it returns "".

var TimeMap = function () {
  // Create a new map for the time-based key-value data structure
  this.timeMap = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  // If the key is not in the map, create a new array to store an object of the timestamp and value pair for the key
  if (!this.timeMap.has(key)) {
    this.timeMap.set(key, []);
  }

  // Set the timestamp and value pair as the value of the key
  this.timeMap.get(key).push({ timestamp, value });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  // If the key is not in the map, return an empty string
  if (!this.timeMap.has(key)) {
    return "";
  }

  // Create and initialize the timestamp array from the value of the key
  const timestamps = this.timeMap.get(key);

  // Create and initialize variables to store and track the left, right, and the index of the largest previous timestamp
  let left = 0;
  let right = timestamps.length - 1;
  let previous = -1;

  // Iterate through the timestamp array using a while loop
  while (left <= right) {
    // Calculate the middle index between the left and right pointers
    const middle = Math.floor((left + right) / 2);

    // If the timestamp at the middle index is equal to the input timestamp, return its value
    // If the timestamp at the middle index is less than the input timestamp,
    // update the index of the largest previous timestamp to the middle index and move the left pointer to the next index after the middle
    // Otherwise, move the right pointer to the next index before the middle
    if (timestamps[middle].timestamp === timestamp) {
      return timestamps[middle].value;
    } else if (timestamps[middle].timestamp < timestamp) {
      previous = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // If the index of the largest previous timestamp is not -1, return its value
  // Otherwise, return an empty string
  return previous !== -1 ? timestamps[previous].value : "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// The time complexity of the set method is O(1) because we are simply adding a new entry to the map.
// The time complexity of the get method is O(log n) because we are performing a binary search on the array of timestamps for the given key.
// The space complexity of the TimeMap class is O(n) where n is the number of unique keys added to the map.
// This is because we are storing an array of timestamps for each key in the map.
