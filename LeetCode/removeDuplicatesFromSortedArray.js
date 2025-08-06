/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 */

/** Constraints:
 * - nums array will hold at least one number
 * - sorted in non-descresing order
 * - numbers greater than or equal to -100 up to 100
 */

// input: nums array
// output: array containing one of each value, duplicates added as '_' at end.

var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

console.log(
  removeDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6])
);
