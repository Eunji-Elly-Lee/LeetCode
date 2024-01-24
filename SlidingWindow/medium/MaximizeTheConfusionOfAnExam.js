// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/description/
// String / Binary Search / Sliding Window / Prefix Sum

// A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false.
// He wants to confuse the students by maximizing the number of consecutive questions with the same answer
// (multiple trues or multiple falses in a row).
// You are given a string answerKey, where answerKey[i] is the original answer to the ith question.
// In addition, you are given an integer k, the maximum number of times you may perform the following operation:
// Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
// Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // Create and initialize variables for the maximum number of consecutive answers, counters, and the left index
  let numberOfAnswers = 0;
  let tCounter = 0;
  let fCounter = 0;
  let leftIndex = 0;

  // Iterate through the input string using a for loop with the right index
  for (let rightIndex = 0; rightIndex < answerKey.length; rightIndex++) {
    // If the current answer is T, increase the T counter
    // Otherwise increase the F counter
    if (answerKey[rightIndex] === "T") {
      tCounter++;
    } else {
      fCounter++;
    }

    // Update the window of indices by moving the left index
    // until the maximum number of consecutive T or F is less than or equal to k
    while (
      rightIndex - leftIndex + 1 - tCounter > k &&
      rightIndex - leftIndex + 1 - fCounter > k
    ) {
      if (answerKey[leftIndex] === "T") {
        tCounter--;
      } else {
        fCounter--;
      }

      leftIndex++;
    }

    // Update the maximum number of consecutive answers if the length of the current window is larger
    numberOfAnswers = Math.max(numberOfAnswers, rightIndex - leftIndex + 1);
  }

  // Return the maximum number of consecutive answers
  return numberOfAnswers;
};

// The time complexity of this code is O(n), where n is the length of the `answerKey`.
// This is because the code iterates through the `answerKey` once in the for loop.
// The space complexity of this code is O(1).
// This is because the code only uses a constant amount of additional space to store the counters and indices.
