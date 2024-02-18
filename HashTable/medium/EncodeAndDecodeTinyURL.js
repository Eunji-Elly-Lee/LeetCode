// https://leetcode.com/problems/encode-and-decode-tinyurl/description/
// Hash Table / String / Design / Hash Function

// Note: This is a companion problem to the System Design problem: Design TinyURL.
// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl
// and it returns a short URL such as http://tinyurl.com/4e9iAk.
// Design a class to encode a URL and decode a tiny URL.
// There is no restriction on how your encode/decode algorithm should work.
// You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
// Implement the Solution class:
// Solution() Initializes the object of the system.
// String encode(String longUrl) Returns a tiny URL for the given longUrl.
// String decode(String shortUrl) Returns the original long URL for the given shortUrl.
// It is guaranteed that the given shortUrl was encoded by the same object.

// Create two maps to store URLs
const longUrls = new Map();
const shortUrls = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  // If the input long URL is already in the mep, return its value as the short URL
  if (longUrls.has(longUrl)) {
    return longUrls.get(longUrl);
  }

  // Create and initialize variables for the characters used for encoding and the short URL  
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortUrl = "";

  // Use a while loop to generate a short URL until its length is 7
  while (shortUrl.length <= 7) {
    // Create a random index and add the character at the index to the short URL
    const randomIndex = Math.floor(Math.random() * chars.length);
    shortUrl += chars.charAt(randomIndex);

    // If a short URL of length 7 is already in the map, initialize it as an empty string    
    if (shortUrl.length === 7 && shortUrls.has(shortUrl)) {
      shortUrl = "";
    }
  }

  // Set the URLs in the maps
  longUrls.set(longUrl, shortUrl);
  shortUrls.set(shortUrl, longUrl);

  // Return the short URL
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  // Retrieve the input short URL from the map and return its value as the original long URL  
  return shortUrls.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

// The time complexity of the `encode` function is O(1) on average,
// as the while loop runs until a unique short URL is generated, which typically takes a constant number of iterations.
// However, in the worst-case scenario, overlapping short URLs can lead to multiple iterations of the loop, resulting in O(n).
// The time complexity of the `decode` function is also O(1) as it involves a simple lookup in the `shortUrls` map
// The space complexity is O(n), where n is the number of unique long URLs stored in the maps.
