// https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/
// Array / Sorting / Matrix

// There is a class with m students and n exams.
// You are given a 0-indexed m x n integer matrix score,
// where each row represents one student and score[i][j] denotes the score the ith student got in the jth exam.
// The matrix score contains distinct integers only.
// You are also given an integer k.
// Sort the students (i.e., the rows of the matrix) by their scores in the kth (0-indexed) exam from the highest to the lowest.
// Return the matrix after sorting it.

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  // Return the input matrix after sorting it using the sort() method
  return score.sort((a, b) => b[k] - a[k]);
};

// The time complexity of this function is O(n log n), where n is the number of students.
// This is because the function uses the Array.sort() method, which has a time complexity of O(n log n) in the average case.
// The space complexity of this function is O(1) because it does not use any additional data structures that grow with the input size.
