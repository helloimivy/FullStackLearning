import { rotate, rotate2 } from "./rotateArray.js";
// const rotate, rotate2 = require("./rotateArray.js");

test(" Test [1, 2, 3, 4, 5, 6, 7], 3 expecting to return [5, 6, 7, 1, 2, 3, 4]", () => {
  expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toBe([5, 6, 7, 1, 2, 3, 4]);
});

test(" Test [1, 2, 3, 4, 5, 6, 7], 3 expecting to return [5, 6, 7, 1, 2, 3, 4]", () => {
  expect(rotate2([1, 2, 3, 4, 5, 6, 7], 3)).toBe([5, 6, 7, 1, 2, 3, 4]);
});