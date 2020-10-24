// Using built-in function constructor for primitive type
// Does NOT create a primitive value,
// It creates an object with `PrimitiveValue` property inside of it

const a = new Number("3");
console.log(a); // An object, not a primitive value
/*
Number {3}
__proto__: Number
[[PrimitiveValue]]: 3
*/

console.log(a.toFixed(2)); // 3.00

const b = new String("John");
console.log(b); // An object, not a primitive value
/*
String {"John"}
0: "J"
1: "o"
2: "h"
3: "n"
length: 4
__proto__: String
[[PrimitiveValue]]: "John"
*/

console.log(b.indexOf("o")); // 1
"John".indexOf("o"); // 1 - "JavsScript wraps primitive inside a String object automatically"

/* ---------------------------------------------------------------------------------- */
/* -------------- Add extra features to built-in function constructor --------------- */
/* ---------------------------------------------------------------------------------- */

// All string object will have new feature we added to String function constructor
String.prototype.isLengthGreaterThan = function (limit) {
  // `this` points to the string object
  return this.length > limit; // true or false
};

// "John" primitive string is converted to string object automatically
// Then JS looks down prototype chain to find .isLengthGreaterThan() method
// we added on the String function constructor's prototype
console.log("John".isLengthGreaterThan(3)); //true

Number.prototype.isPositive = function () {
  return this > 0;
};

// ERROR - JavsScript CANNOT automatically convert number primitive to Number object
// console.log(3.isPovitive())

const num = Number(3);
console.log(num.isPositive()); // true

// Best practices: NOT to use built in function constructors to declare primitive values
// Use literals
console.log(3 == new Number(3)); // true
console.log(3 === new Number(3)); // false
