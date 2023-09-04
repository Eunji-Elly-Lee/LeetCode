// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Create an array to store the products of all the elements
  const products = [];

  // Initialize a left side product tracker
  let leftSideProduct = 1;

  // Calculate the product on the left side of each element, moving from left to right
  for (let index = 0; index < nums.length; index++) {
    products[index] = leftSideProduct;
    leftSideProduct *= nums[index];
  }

  // Initialize a right side product tracker
  let rightSideProduct = 1;

  // Calculate the product on the right side of each element, moving from right to left
  for (let index = nums.length - 1; index >= 0; index--) {
    products[index] *= rightSideProduct;
    rightSideProduct *= nums[index];
  }

  return products;
};

// The time complexity of this code is O(n), where n is the length of the input array nums.
// This is because there are two loops that iterate through the array once,
// and the number of iterations is directly proportional to the length of the array.
// The space complexity of this code is O(1) because it uses a constant amount of additional memory regardless of the size of the input array nums.
// The code does not create any new data structures or arrays whose size depends on nums.
// Instead, it utilizes a fixed number of variables (products, leftSideProduct, rightSideProduct, and index) to perform the calculations,
// making it a space-efficient solution.

// The time complexity of my initial code is O(n^2) because there is a nested loop.
// The outer loop iterates over the nums array, and for each iteration, the inner loop (nums.reduce) iterates over the nums array again.
// Therefore, the total number of iterations is n * n = n^2.
// The space complexity of my initial code is O(n) because the products array grows linearly with the size of the nums array.

// let products = [];

// for (let index = 0; index < nums.length; index++) {
//   const value = nums.reduce((accumulator, currentNumber) => {
//     if (currentNumber === nums[index]) {
//       return accumulator;
//     } else {
//       return accumulator * currentNumber;
//     }
//   });

//   products.push(value);
// }

// return products;
