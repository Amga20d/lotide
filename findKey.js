//Assertion Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//findKey function

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

//Test Cases:

const rating = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const result1 = findKey(rating, (x) => x.stars === 2);
const result2 = findKey(rating, (x) => x.stars === 1);
const result3 = findKey(rating, (x) => x.stars === 4);

assertEqual(result1, "noma"); //Should PASS
assertEqual(result2, "Blue Hill"); //Should PASS
assertEqual(result3, undefined); //Should PASS

module.exports = findKey;