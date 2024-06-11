// https://leetcode.com/problems/lru-cache/description/
// Hash Table / Linked List / Design / Doubly-Linked List

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists.
// Otherwise, add the key-value pair to the cache.
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // Create a new map for the key-value pairs of the cache
  this.cacheMap = new Map();
  // Store the input capacity
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // If the input key is not in the cache map, return -1
  if (!this.cacheMap.has(key)) {
    return -1;
  }

  // Get the value of the key
  const value = this.cacheMap.get(key);
  // Delete the key from the cache map and re-insert it to update its position
  this.cacheMap.delete(key);
  this.cacheMap.set(key, value);

  // Return the value of the key
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // Delete the key from the cache map if it exists, and set the key-value pair
  this.cacheMap.delete(key);
  this.cacheMap.set(key, value);

  // If the size of the cache map exceeds the capacity, delete the least recently used item
  if (this.cacheMap.size > this.capacity) {
    const firstCache = this.cacheMap.keys().next().value;
    this.cacheMap.delete(firstCache);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// The time complexity of the `get` and `put` methods in the LRUCache class is O(1)
// because the operations involved (such as accessing a key in a Map, deleting a key from a Map, and adding a key-value pair to a Map)
// are all constant time operations.
// The space complexity of the LRUCache class is O(capacity)
// because the size of the cacheMap will be limited by the capacity specified when creating an instance of the LRUCache class.
