// https://leetcode.com/problems/finding-the-users-active-minutes/
// Array / Hash Table

// You are given the logs for users' actions on LeetCode, and an integer k.
// The logs are represented by a 2D integer array logs
// where each logs[i] = [ID i, time i] indicates that the user with IDi performed an action at the minute time i.
// Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
// The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode.
// A minute can only be counted once, even if multiple actions occur during it.
// You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k),
// answer[j] is the number of users whose UAM equals j.
// Return the array answer as described above.

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  // Create a map to store users' actions by their ID
  const logMap = new Map();

  // Iterate through the log array using a for...of loop
  for (const log of logs) {
    // If the ID isn't in the log map, add the ID with an empty new set as its value
    if (!logMap.has(log[0])) {
      logMap.set(log[0], new Set());
    }

    // Add the action time to the set of the ID
    logMap.get(log[0]).add(log[1]);
  }

  // Create an array to store UAMs, and fill all elements as 0 which is a defult value
  const UAMs = new Array(k).fill(0);

  // Iterate through the values of the log map using a for...of loop
  // The values represent the actions of each user ID
  for (const actions of logMap.values()) {
    // Increase the value of the array corresponding to the size of actions
    UAMs[actions.size - 1]++;
  }

  // Return the UAM array
  return UAMs;
};

// The time complexity of this solution is O(n), where n is the length of the input array `logs`.
// This is because we iterate through each log once to create the `logMap`,
// and then iterate through each set of actions in the `logMap` to update the UAMs array.
// The space complexity of this solution is O(n), where n is the maximum number of actions per user.
// This is because we create an array `UAMs` of size n to store the UAMs.
// Additionally, we create a map `logMap` to store the actions for each user, which can have a maximum size of the number of logs.
// However, since n is typically much smaller than the number of logs, the space complexity can be considered O(n).
