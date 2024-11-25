//Assertion function
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




const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const nums = [2, 3, 4, 5];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.length);
const results3 = map(nums, (num) => num * num);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => should PASS
assertArraysEqual(results2, [6, 7, 2, 5, 3]); // => should PASS
assertArraysEqual(results3, [4, 9, 16, 25]); // => should PASS

module.exports = map;