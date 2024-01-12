// https://leetcode.com/problems/candy/description/
// Array / Greedy

// There are n children standing in a line.
// Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // Create and initialize an array to store the number of candies, initially giving one candy to each child
  const numberOfCandies = Array(ratings.length).fill(1);

  // Iterate through the input array using a for loop to compare the ratings from left to right
  for (let index = 1; index < ratings.length; index++) {
    // Update the number of candies to give more candies to children with higher ratings  
    if (ratings[index] > ratings[index - 1]) {
      numberOfCandies[index] = numberOfCandies[index - 1] + 1;
    }
  }

  // Iterate through the input array using a for loop to compare the ratings from right to left
  for (let index = ratings.length - 2; index >= 0; index--) {
    // Update the number of candies
    // to be the higher value between the current number of candies and receiving one more candy
    if (ratings[index] > ratings[index + 1]) {
      numberOfCandies[index] = Math.max(
        numberOfCandies[index],
        numberOfCandies[index + 1] + 1
      );
    }
  }

  // Return the sum of all candies
  return numberOfCandies.reduce((sum, candies) => sum + candies, 0);
};

// The time complexity of this code is O(n), where n is the length of the `ratings` array.
// This is because there are two loops that iterate through the `ratings` array, each with a linear time complexity.
// The space complexity of this code is O(n), where n is the length of the `ratings` array.
// This is because the `numberOfCandies` array is created with a length equal to the ratings array, resulting in O(n) space usage.
// Additionally, the reduce function creates a new array with a length equal to the ratings array, resulting in another O(n) space usage.
// Therefore, the overall space complexity is O(n).
