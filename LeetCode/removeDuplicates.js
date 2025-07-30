/** Constraints:
 * - nums array will hold at least one number
 * - sorted in non-descresing order
 * - numbers greater than or equal to -100 up to 100
 */

// input: nums array
// output: array containing one of each value, duplicates added as '_' at end.

var removeDuplicates = function (nums) {
  // declare output array
  const output = [];
  // declare placeholder array
  const placeholder = [];
  // loop through array
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // conditional
    // if array is empty or num is larger than last num in array, push num to array
    if (output.length === 0 || output[output.length - 1] < num) {
      output.push(num);
    } else {
      placeholder.push("_");
    }
    // if not, add a '_' to the placeholder array
  }

  return output.concat(placeholder);
  // return output array joined with plaeceholder array
};

removeDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6]);
