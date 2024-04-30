// https://leetcode.com/problems/permutation-in-string/description/
// Hash Table / Two Pointers / String / Sliding Window

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // If the length of s1 is greater than that of s2, return false
  if (s1.length > s2.length) {
    return false;
  }

  // Create a new map to store the frequency of characters in s1
  const map = new Map();

  // Iterate through the input string s1 using a for..of loop
  for (const s of s1) {
    // Update the frequency of the current character in the map
    if (map.has(s)) {
      map.set(s, map.get(s) + 1);
    } else {
      map.set(s, 1);
    }
  }

  // Create a new map to store the frequency of characters in the sliding window and the left index of the sliding window
  const windowMap = new Map();
  let leftIndex = 0;

  // Iterate through the input string s2 using a for loop with the right index
  for (let rightIndex = 0; rightIndex < s2.length; rightIndex++) {
    // Update the frequency of the current character in the map
    if (windowMap.has(s2.charAt(rightIndex))) {
      windowMap.set(
        s2.charAt(rightIndex),
        windowMap.get(s2.charAt(rightIndex)) + 1
      );
    } else {
      windowMap.set(s2.charAt(rightIndex), 1);
    }

    // If the current length of the sliding window is equals to the length of s1,
    // compare two maps and manipulate the sliding window
    if (rightIndex - leftIndex + 1 === s1.length) {
      // If two maps are the same, return true
      if (compareMaps(map, windowMap)) {
        return true;
      }

      // Update the frequency of the left character in the map
      windowMap.set(
        s2.charAt(leftIndex),
        windowMap.get(s2.charAt(leftIndex)) - 1
      );

      // If the frequency of the left character is 0, delete the left character from the map
      if (windowMap.get(s2.charAt(leftIndex)) === 0) {
        windowMap.delete(s2.charAt(leftIndex));
      }

      // Move the left index to the right side
      leftIndex++;
    }
  }

  // Return false because s1's permutations have not been found in s2
  return false;
};

// Function to compare two maps
var compareMaps = function (map, windowMap) {
  // If the sizes of two maps are different, return false
  if (map.size !== windowMap.size) {
    return false;
  }

  // If the key-value pairs in two maps do not match, return false
  for (const [key, value] of map) {
    if (windowMap.get(key) !== value) {
      return false;
    }
  }

  // Return true because two maps are equal
  return true;
};

// The time complexity of this solution is O(n), where n is the length of the longer string `s2`.
// This is because we iterate through each character in s2 only once.
// The space complexity is O(m), where m is the length of the shorter string `s1`.
// This is because we use two maps to store the frequency of characters in `s1` and the current window in `s2`.
// The size of these maps will be at most equal to the number of unique characters in `s1`, which is O(m).

// The time complexity of my initial code is O(n * m), where n is the length of `s1` and m is the length of `s2`.
// This is because we iterate through `s2` with a sliding window of size equal to the length of `s1`,
// and for each window position, we iterate through `s1` to update the frequency map.
// The space complexity of my initial code is O(n), where n is the number of unique characters in `s1`.
// This is because we store the frequency of each character in `s1` in a map.

// var checkInclusion = function (s1, s2) {
//     if (s1.length > s2.length) {
//       return false;
//     }

//     const map = new Map();

//     for (const s of s1) {
//       if (map.has(s)) {
//         map.set(s, map.get(s) + 1);
//       } else {
//         map.set(s, 1);
//       }
//     }

//     let copyMap = new Map(map);

//     for (let rightIndex = s1.length - 1; rightIndex < s2.length; rightIndex++) {
//       if (copyMap.has(s2.charAt(rightIndex))) {
//         let leftIndex = rightIndex - (s1.length - 1);

//         while (leftIndex <= rightIndex) {
//           if (copyMap.has(s2.charAt(leftIndex))) {
//             copyMap.set(
//               s2.charAt(leftIndex),
//               copyMap.get(s2.charAt(leftIndex)) - 1
//             );

//             if (copyMap.get(s2.charAt(leftIndex)) === 0) {
//               copyMap.delete(s2.charAt(leftIndex));
//             }
//           }

//           leftIndex++;
//         }

//         if (copyMap.size === 0) {
//           return true;
//         }
//       }

//       copyMap = new Map(map);
//     }

//     return false;
//   };
