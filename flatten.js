const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
    
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arr) {
  let newArr = [];
  for (let element of arr) {
    if (!Array.isArray(element)) {
      newArr.push(element);
    } else {
      for (let nested of element) {
        newArr.push(nested);
      }
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // Should PASS

assertArraysEqual(flatten([['a', 'b', 'c', 'd'], ['e', 'f']]), ['a', 'b', 'c', 'd', 'e', 'f']); // Should PASS

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, [6]]); // Should FAIL

module.exports = flatten;