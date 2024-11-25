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


const without = function(source, remove) {
  let newArr = [];
  for(let s of source) {
    let add = true;
    for(let r of remove){
      if(s === r){
       add = false;
       break;
      }
    }
    if (add) {
      newArr.push(s);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [2, 1])); // => [3]
console.log(without(["1", "2", "3"], ["1", 2, "3"])); // => ["2"]

// Test Cases:
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should PASS
assertArraysEqual(without(["1", "2", "3"], ["1", 2, "3"]), ["2"]); // Should PASS
assertArraysEqual(without([1, 2, 3], [2, 1]), [2]); // Should FAIL

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;
