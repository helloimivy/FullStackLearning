/**
 * 268. Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 *
 * *** Array will always start from 0.
 *
 * Example 1:
 * Input: nums = [3,0,1]
 * Output: 2
 *
 * Example 2:
 * Input: nums = [9,6,4,2,3,5,7,0,1]
 * Output: 8
 *
 * Example 3:
 * Input: nums = [0, 1]
 * Output: 2
 */

function missingNumber(array) {
  const arrayLength = array.length;
  let i = 1;
  let expectedTotal = 0;
  // I used reduce here to get a total, but I wanted to challenge myself to get the answer without the use of methods.
  // let arrayTotal = array.reduce((acc, cur) => acc + cur);
  let sum = 0;
  while (i <= array.length) {
    expectedTotal += i;
    // Added line to total array in place of the reduce method
    sum += array[i - 1];
    i++;
  }

  return expectedTotal - sum;
  // return expectedTotal - arrayTotal
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
