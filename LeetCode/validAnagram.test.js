import { validAnagram } from "./validAnagram.js";
// const validAnagram = require("./validAnagram");

test("cattt and tac to be false", () => {
  expect(validAnagram("cattt", "tac")).toBe(false);
});
