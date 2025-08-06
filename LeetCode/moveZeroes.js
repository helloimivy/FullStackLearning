/**
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 *
 * Do this in place without making a copy of the array
 *  */

// constraints: array will contain at least one number

// two pointer approach
// swap left with right when right is a non-zero, increment after
// increment right every iteration, only increment left when right is non-zero

function moveZeroes(array) {
  let left = 0;
  let right = 0;
  while (right < array.length) {
    if (array[right] !== 0) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
    }
    right++;
  }
  return array;
}

console.log(moveZeroes([1, 2, 0, 3, 0, 3, 5, 6, 7]));
console.log(moveZeroes([0, 0, 0, 0, 12, 3, 4, 5, 6, 7]));
