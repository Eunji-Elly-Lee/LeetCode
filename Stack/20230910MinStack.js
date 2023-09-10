// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.
// Methods pop, top and getMin operations will always be called on non-empty stacks.

var MinStack = function () {
  this.stack = [];
  // Create a separate stack to manage minimums
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

// The time complexity of this code is O(1)
// because all the operations (pushing to the stack and checking the length of the minStack) are constant time operations.
// The space complexity of this code is O(n), where n is the number of elements in the stack.
// This is because both the stack and the minStack will grow in size as elements are pushed onto the stack.

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length !== 0) {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
};

// The time complexity of this code is O(1) because it only performs a constant number of operations, regardless of the size of the input.
// The space complexity is also O(1) because it does not use any additional space that grows with the size of the input.

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length !== 0) {
    return this.stack[this.stack.length - 1];
  }
};

// The time complexity of this code is O(1) because it only performs a single operation,
// which is accessing the last element of the stack using the length property and returning it.
// The space complexity is also O(1) because it does not use any additional space that grows with the input size.

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length !== 0) {
    return this.minStack[this.minStack.length - 1];
  }
};

// The time complexity of this code is O(1) because it only involves accessing the last element of an array, which can be done in constant time.
// The space complexity is also O(1) because it does not use any additional space that grows with the input size.
// The space used is constant regardless of the size of the input.

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
