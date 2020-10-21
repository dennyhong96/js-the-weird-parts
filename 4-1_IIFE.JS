// IIFE - Immediately Invoked Function Expressions
// Syntax:
(function (name) {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
})("Denny");

((name) => {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
})("Denny");

/* ---------------------------------------------------------------------------------- */
// IIFE and execution context

var greeting = "HOLA";

(function (name) {
  var greeting = "HELLO"; // Brand new execution context, not global.
  console.log(`${greeting}, ${name}!`); // "HELLO, Denny!"
})("Denny");

console.log(greeting); // "HOLA"

global.greeting = "HOLA";

(function (global, name) {
  var greeting = "HELLO"; // Brand new execution context, not global.
  global.greeting = greeting; // Modify global variable
  console.log(`${greeting}, ${name}!`); // "HELLO, Denny!"
})(global, "Denny");

console.log(greeting); // "HELLO"
