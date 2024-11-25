const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Test Cases:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => should FAIL
assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), false); // => should FAIL