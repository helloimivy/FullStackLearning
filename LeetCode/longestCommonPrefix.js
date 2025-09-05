/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1
 * Input: strs = ["flower","flow","flight"]
 * Output: 'fl'
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ''
 */

var longestCommonPrefix = function (strs) {
  let cache = strs[0];
  if (cache.length < 1) return "";
  for (let i = 1; i < strs.length; i++) {
    let currentString = strs[i];
    if (currentString.length < 1) return "";
    if (currentString === cache) continue;
    let j = 0;
    while (cache[j] === currentString[j]) {
      j++;
    }
    cache = cache.substring(0, j);
    cacheLength = 0;
  }
  return cache;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
