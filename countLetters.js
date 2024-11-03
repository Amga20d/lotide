// Assertion function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// CountLetters function

const countLetters = function(sentence) {
  let lowerCase = sentence.toLowerCase();
  const result = {};
  for (let letter of lowerCase) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};


// Test Cases

const result1 = countLetters("Aas b c");

assertEqual(result1["a"], 2);   //Should Pass. Test if capital or small should be counted as one letter.
assertEqual(result1["b"], 1);   // Should Pass.
assertEqual(result1[" "], undefined); //Should Pass. Test if spaces has not been included in the count.


