/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2
 * Input: s = "rat", t = "cat"
 * Output: false
 *  */

function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const hash = {};

  // implement chars on hash from s string and incrmement respective value
  for (let char of s) {
    if (!hash[char]) hash[char] = 0;
    hash[char]++;
  }
  // decementing chars on hash from t string
  for (let char of t) {
    // if char is not a key on hash then return false
    if (!hash[char]) return false;
    // if key has value on hash less than 1 (0) before decrementing return false
    if (hash[char] < 1) return false;
    // decrement
    hash[char]--;
  }

  return true;
}

// function validAnagram (s, t){
//   if (s.length !== t.length) return false;

//   const counter = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++){
//     counter[s.charCodeAt(i)-97]++;
//     counter[t.charCodeAt(i)-97]--;
//   }

//   for (let i = 0; i < counter.length; i++){
//     if (counter[i] !== 0) return false;
//   }

//   return true;
// }

console.log(validAnagram("cattt", "tac"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "cat"));
