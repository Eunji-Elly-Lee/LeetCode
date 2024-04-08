## LeetCode Solutions

![logo](https://theme.zdassets.com/theme_assets/9008406/036323c6afd10392aa5b7e3a2eb7557d17955c81.png)

#### [Go to LeetCode](https://leetcode.com//)

This repository serves as a playground for me to sharpen my coding skills by tackling algorithmic challenges on LeetCode. Here, you'll find my solutions crafted primarily in JavaScript, meticulously categorized by algorithm type and difficulty level.

### Why LeetCode?

LeetCode offers a fantastic platform to push my coding abilities to the limit. By tackling an array of problems, I actively engage in the following:

- **Solidifying Data Structures & Algorithms**: Deepen understanding and practical application of core data structures and algorithms
- **Enhancing Problem-Solving Approach**: Develop a structured and efficient approach to problem-solving, fostering critical thinking skills
- **Boosting Time & Space Complexity Awareness**: Optimize solutions by analyzing time and space complexity, ensuring efficient resource utilization

### Code Sample & Explanation:

To illustrate my approach, here's a sample solution for the "Remove Element" problem along with a detailed explanation:

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

### Beyond the Code:

This repository isn't just a collection of solutions; it represents my dedication to continuous learning and improvement. By actively engaging with LeetCode challenges, I strive to become a more well-rounded and efficient developer.

**I welcome any feedback or suggestions you might have!**
