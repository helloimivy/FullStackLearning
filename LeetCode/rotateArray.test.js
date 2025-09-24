import { rotate, rotate2 } from "./rotateArray.js";
// const rotate, rotate2 = require("./rotateArray.js");

// **** TEST 1 FOR BOTH FUNCTIONS 
test(" Test [1, 2, 3, 4, 5, 6, 7], 3 expecting to return [5, 6, 7, 1, 2, 3, 4]", () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toBe([5, 6, 7, 1, 2, 3, 4]);
});

test(" Test [1, 2, 3, 4, 5, 6, 7], 3 expecting to return [5, 6, 7, 1, 2, 3, 4]", () => {
  expect(rotate2([1, 2, 3, 4, 5, 6, 7], 3)).toBe([5, 6, 7, 1, 2, 3, 4]);
});


// **** TEST 2 FOR BOTH FUNCTIONS 
test(" Test [-1,-100,3,99], 2 expecting to return [3,99,-1,-100]", () => {
  expect(rotate([-1, -100, 3, 99], 2)).toBe([3, 99, -1, -100]);
});

test(" Test [-1,-100,3,99], 2 expecting to return [3,99,-1,-100]", () => {
  expect(rotate2([-1, -100, 3, 99], 2)).toBe([3, 99, -1, -100]);
});