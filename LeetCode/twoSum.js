// declare prev nums obj
// loop through nums array
// declare remainer and assign value of target - nums
// conditional; if remainder is found in previous nums return value and i
// if not found, add value and index as key/value pair on nums

var twoSum = function (nums, target) {
  const prevNums = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let remainder = target - num;
    if (remainder in prevNums) return [prevNums[remainder], i];

    prevNums[num] = i;
  }
};
