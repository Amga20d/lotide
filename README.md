# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @amga20d/lotide`

**Require it:**

`const _ = require('@amga20d/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

#head(array): Returns the first element of an array.

tail(array): Returns everything except the first element of an array.

middle(array): Returns the middle element(s) of an array.

assertArraysEqual(actual, expected): Asserts if two arrays are equal.

assertEqual(actual, expected): Asserts if two values are equal.

assertObjectsEqual(actual, expected): Asserts if two objects are equal.

countLetters(string): Returns an object with the count of each letter in the string.

countOnly(allItems, itemsToCount): Counts occurrences of specified items in a collection.

eqArrays(array1, array2): Compares two arrays for equality.

eqObjects(object1, object2): Compares two objects for equality.

findKey(object, callback): Returns the first key for which the callback returns a truthy value.

findKeyByValue(object, value): Returns the first key that contains the given value.

letterPositions(string): Returns an object with the index positions of each letter in the string.

takeUntil(array, callback): Creates a slice of an array with elements taken from the beginning until the callback returns a truthy value.

without(array, values): Returns a new array with specified values removed.
