// 3 methods on any functions -> .bind() .call() .apply()

const person1 = {
  firstname: "Denny",
  lastname: "Hong",
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  },
};

// You CANNOT re-bind an arrow functions's `this` value, but can re-bind `args`
function logName(lang1, lang2) {
  console.log(this);
  console.log(`${lang1} ${lang2} Logged: ${this.getFullname()}...`);
}

logName(); // Error, global object does NOT have a getFullname()

// func.bind() returns a new copy of the func with given `this` value and `args`
logName.bind(person1)("en", "es"); // en es Logged: Denny Hong...
logName.bind(person1, "en", "es")(); // en es Logged: Denny Hong...

// func.call() calls the function with given `this` value and `args`
logName.call(person1); // undefined undefined Logged: Denny Hong...
logName.call(person1, "en", "es"); // en es Logged: Denny Hong...

// func.apply() is very similar to func.call(), only difference is that the
// `args` are in an array format
logName.apply(person1, ["es", "en"]); // es en Logged: Denny Hong...

/* ----------------------------------------------------------------------------------- */
// PATTERNS:

// 1. Method borrowing
const person2 = {
  firstname: "Sharon",
  lastname: "Zhang",
};

console.log(person1.getFullname.bind(person2)()); // Sharon Zhang

// 2. Function Currying - Creating a copy of a function but with some preset parameters
function multiply(x, y) {
  return x * y;
}

// multiplyByTwo - a copy of multiply which `x` argument is permanently set to 2
const multiplyByTwo = multiply.bind(this, 2); // Sets 2 as permanent value for 1st argument `x`

// Now value 3 is being passed as 2nd argument `y`, because 1st argument `x` is already used
console.log(multiplyByTwo(3)); // 6
console.log(multiplyByTwo(4)); // 8
