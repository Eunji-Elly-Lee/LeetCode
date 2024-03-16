// https://leetcode.com/problems/product-of-array-except-self/description/
// Array / Prefix Sum

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Follow up: Can you solve the problem in O(1) extra space complexity?
// (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Create an empty array to sotre products
  const products = [];

  // Initialize the left side product with 1
  let leftSideProduct = 1;

  // Iterate through the input array from left to right
  for (let index = 0; index < nums.length; index++) {
    // Store the current left side product at the current index of the products array
    products[index] = leftSideProduct;
    // Update the left side product by multiplying with the current number
    leftSideProduct *= nums[index];
  }

  // Initialize the right side product with 1
  let rightSideProduct = 1;

  // Iterate through the input array from right to left
  for (let index = nums.length - 1; index >= 0; index--) {
    // Update the current product by multiplying with the current right side prodect
    products[index] *= rightSideProduct;
    // Update the right side prodect by multiplying with the current number
    rightSideProduct *= nums[index];
  }

  return products;
};

// The time complexity of this solution is O(n) because we iterate through the input array twice, once from left to right and once from right to left.
// The space complexity is also O(n) because we use an additional array to store the products.
// But it says that "The output array does not count as extra space for space complexity analysis".

