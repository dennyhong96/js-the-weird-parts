// Functional programming is amplified in JavaScript
// Because functions are First-class
// They can be assigned to variables, get passed around, created on the fly

// Re-write an 'array.map()'

/**
 * Loop through each item in an array and performs some operations on each item
 * @param {array} arr - An array of items
 * @param {function} fn - A function that tells what to do with each item
 * @returns {array} result - An array with items after transforamtion
 */
const mapForeach = (arr, fn) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }

  return result;
};

// mapForeach usage:
const arr = [1, 2, 3];
console.log(mapForeach(arr, (item) => item * 2)); // [ 2, 4, 6 ]
console.log(mapForeach(arr, (item) => item > 1)); // [ false, true, true ]

// Add a reusable `checkPastLimit` and pass it to mapForeach
const checkPastLimit = (limiter, item) => item > limiter;

// Use func.bind() to preset a value 1 for `checkPastLimit`'s 1st argument `limiter`
// the for each iteration, `item` will be passed as `checkPastLimit`'s 2nd argument `item`
console.log(mapForeach(arr, checkPastLimit.bind(this, 1))); // [ false, true, true ]
console.log(mapForeach(arr, checkPastLimit.bind(this, 2))); // [ false, false, true ]

// Combine with Factory Functions:
const checkPastLimitFactory = (limiter) => checkPastLimit.bind(this, limiter);
console.log(mapForeach(arr, checkPastLimitFactory(1))); // [ false, true, true ]
console.log(mapForeach(arr, checkPastLimitFactory(2))); // [ false, false, true ]

// or
const checkPastLimitFactory2 = (limiter) => (item) => item > limiter; // Closure
console.log(mapForeach(arr, checkPastLimitFactory2(1))); // [ false, true, true ]
console.log(mapForeach(arr, checkPastLimitFactory2(2))); // [ false, false, true ]
