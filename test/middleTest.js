const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// Test Cases:

assertArraysEqual(middle([1]), []); // Should PASS
assertArraysEqual(middle([1, 2]), []); // Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should PASS