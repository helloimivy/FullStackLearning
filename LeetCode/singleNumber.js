/**
 * 136. Single Number
 *
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 */

// considered filter as simple solution using first and last index matching but time complexity was large

function singleNumber(arr) {
  const cache = {};
  // could have used set or array, but used object for ease of deletion and return value

  for (let value of arr) {
    if (!cache[value]) {
      cache[value] = 1;
    } else {
      delete cache[value];
    }
  }

  return Object.values(cache)[0];
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));

// Learned neat, more optimized approach using XOR operator, constant space complexity

// My understanding is that the XOR operator, each value is converted to binary.
// After each iteration the number is either added or canceled-out based on new or previously used number.
// Once all duplicated numbers are canceled-out you are left with your one unique number

function singleNumber2(arr) {
  return arr.reduce((acc, cur) => acc ^ cur);
}

console.log(singleNumber2([2, 2, 1]));
console.log(singleNumber2([4, 1, 2, 1, 2]));
