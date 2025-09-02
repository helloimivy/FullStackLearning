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
  let cacheLength = 0;
  for (let i = 1; i < strs.length; i++) {
    let s = strs[i];
    if (s.length < 1) return "";
    if (s === cache) continue;
    let j = 0;
    while (cache[j] === s[j]) {
      j++;
      cacheLength++;
    }
    cache = cache.substring(0, cacheLength);
    cacheLength = 0;
  }
  return cache;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
