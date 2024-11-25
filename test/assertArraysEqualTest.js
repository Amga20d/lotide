const assertArraysEqual = require("../assertArraysEqual");


//Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, "3"], [1, 2, 3]); // => should FAIL because different type values
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL because of different length
assertArraysEqual([2, 1, 3], [1, 2, 3]); // => should FAIL because of different order