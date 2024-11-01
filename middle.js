// Assersion functions
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

// Middle function
const middle = function(arr) {
  let middleArr = [];
  if (arr.length <= 2) {
    return middleArr;
  } else if (arr.length % 2 !== 0) {
    middleArr[0] = arr[Math.floor(arr.length / 2)];
  } else {
    middleArr[0] = arr[Math.floor((arr.length / 2) - 1)];
    middleArr[1] = arr[Math.floor((arr.length / 2))];
  }
  return middleArr;
};

// Test Cases:

assertArraysEqual(middle([1]), []); // Should PASS
assertArraysEqual(middle([1, 2]), []); // Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should PASS


