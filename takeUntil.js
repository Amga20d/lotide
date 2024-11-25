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

//take Until function

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

//Test Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data2, x => x[0] === 'R');

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // => should PASS
assertArraysEqual(results3, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to"]); // => should PASS

module.exports = takeUntil;