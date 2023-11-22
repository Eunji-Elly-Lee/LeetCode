// https://leetcode.com/problems/design-an-ordered-stream/
// Array / Hash Table / Design / Data Stream

// There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string.
// No two pairs have the same id.
// Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion.
// The concatenation of all the chunks should result in a list of the sorted values.
// Implement the OrderedStream class:
// OrderedStream(int n) Constructs the stream to take n values.
// String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream,
// then returns the largest possible chunk of currently inserted values that appear next in the order.

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  // Create an object to store a stream of n (idKey, value) pairs
  this.stream = {};
  // Create a pointer to indicate the current location, starting from 1
  this.pointer = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  // Add the id key with its value into the stream
  this.stream[idKey] = value;

  // If the id key is equal to the pointer
  if (idKey === this.pointer) {
    // Create an empty array to store chunks
    const chunks = [];

    // Iterate through the stream object using a while loop until the pointer exists in the object as a key
    while (this.pointer in this.stream) {
      // Push the value of the pointer key into the array of chunks
      chunks.push(this.stream[this.pointer]);
      // Increase the pointer
      this.pointer++;
    }

    // Return the array of chunks
    return chunks;
  } else {
    // Return an empty array
    return [];
  }
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

// The time complexity of the insert function is O(n), where n is the number of elements in the `stream` object.
// This is because in the worst case scenario, we would have to iterate through all the elements in the `stream` to find the next available chunk.

// The space complexity of the insert function is O(1), as we are only storing the chunks temporarily in an array `chunks`
// and not creating any additional data structures that grow with the input size.
