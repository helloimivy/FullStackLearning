export function rotate(nums, k) {
  let removed = nums.splice(-k);
  return removed.concat(nums);
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

export function rotate2(nums, k) {
  let count = 0;
  while (count < k) {
    let num = nums.pop();
    nums.unshift(num);
    count++;
  }
  return nums;
}

console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))