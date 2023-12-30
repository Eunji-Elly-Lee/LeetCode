## LeetCode Solutions

![logo](https://theme.zdassets.com/theme_assets/9008406/036323c6afd10392aa5b7e3a2eb7557d17955c81.png)

This repository is where I use my main language, JavaScript, to store the solutions to LeetCode.
This repository is where I use my main language, JavaScript, to store the solutions to LeetCode.

#### [Go to LeetCode](https://leetcode.com//)

You can find each problem in a solved algorithm and a folder divided by difficulty level.

### Code Samples

Here is an example of how I approached solving a problem:

```
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Create a variable to indicate the count of numbers not equal to val
  let k = 0;

  // Iterate through the nums array using a for loop
  for (let index = 0; index < nums.length; index++) {
    // If the current number is not equal to val, move this to the front of the array
    // And then, increase k
    if (nums[index] !== val) {
      nums[k] = nums[index];
      k++;
    }
  }

  // Return k
  return k;
};

// The time complexity of this code is O(n), where n is the length of the input array `nums`.
// This is because the code iterates through each element of the array once in the for loop.
// The space complexity of this code is O(1) because it uses a constant amount of extra space.
// The variable `k` is used to keep track of the new length of the array, but it does not depend on the size of the input array.
```
