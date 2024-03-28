// https://leetcode.com/problems/car-fleet/description/
// Array / Stack / Sorting / Monotonic Stack

// There are n cars going to the same destination along a one-lane road.
// The destination is target miles away.
// You are given two integer array position and speed, both of length n,
// where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).
// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed.
// The faster car will slow down to match the slower car's speed.
// The distance between these two cars is ignored (i.e., they are assumed to have the same position).
// A car fleet is some non-empty set of cars driving at the same position and same speed.
// Note that a single car is also a car fleet.
// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
// Return the number of car fleets that will arrive at the destination.

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  // Create a new array to store car objects with their positions and time to target
  const cars = new Array(position.length);

  // Iterate through the position and speed arrays using a for loop
  for (let index = 0; index < position.length; index++) {
    // Push the current car object into the cars array with its position and time to target
    cars[index] = {
      position: position[index],
      timeToTarget: (target - position[index]) / speed[index],
    };
  }

  // Sort cars by their positions in descending order
  // because faster cars (closer to the destination) are considered first
  cars.sort((a, b) => b.position - a.position);

  // Create and initialize variables to store the number of car fleets and the time to target of the previous car
  let fleets = 0;
  let previousTime = -1;

  // Iterate through the cars array using a for...of loop
  for (const car of cars) {
    // If the current time to target is greater than the previous one, update the number of car fleets and the previous time
    // because it means that if a car catches up to another car, they will eventually reach the destination together
    if (car.timeToTarget > previousTime) {
      fleets++;
      previousTime = car.timeToTarget;
    }
  }

  // Return the final number of car fleets
  return fleets;
};

// The time complexity of this solution is O(n log n), where n is the number of cars.
// This is because we are sorting the cars array based on their position, which takes O(n log n) time complexity.
// The space complexity is O(n) because we are creating an array of objects to store the position and time to target for each car.
