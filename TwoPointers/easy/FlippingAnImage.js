// https://leetcode.com/problems/flipping-an-image/
// Array / Two Pointers / Bit Manipulation / Matrix / Simulation

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  // Iterate through each row in the input array using a for loop
  for (let index = 0; index < image.length; index++) {
    // Create and initialize pointers
    let leftPointer = 0;
    let rightPointer = image[index].length - 1;

    // Iterate through the columns in the input array using a while loop
    while (leftPointer <= rightPointer) {
      // Reverse and invert the elements
      let temp = image[index][leftPointer];
      image[index][leftPointer] = image[index][rightPointer] === 0 ? 1 : 0;
      image[index][rightPointer] = temp === 0 ? 1 : 0;
      leftPointer++;
      rightPointer--;
    }
  }

  // Return the updated image
  return image;
};

// The time complexity of this code is O(n*m), where n is the number of rows in the `image` and m is the number of columns in the `image`.
// This is because we iterate through each element in the `image` array once,
// and for each element, we perform a constant number of operations.
// The space complexity of this code is O(1)
// because we are modifying the `image` array in place and not using any additional data structures that grow with the input size.
