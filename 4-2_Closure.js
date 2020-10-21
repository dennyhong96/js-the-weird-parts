const greet = (text) => {
  // No matter when the anon function returned by `greet` function is executed
  // It always has `greet` function's variable enviroment available to use (`text`),
  //   eventhough `greet` function's execution context has already popped off the stack.
  //   (Note: the value of `text` will be of when the anon function is called, not when anon is created)

  // This is called Closure - The execution context (of teh anon function) has closed
  //   in its outer variables (`text`) (that it would normally have access to)
  return (name) => {
    console.log(`${text}, ${name}!`);
  };
};

const sayHi = greet("Hi");

// `greet` function finished running, its execution stack has popped off the stack
// But `sayHi` still has a reference of `text` variable of value `Hi`

sayHi("Denny"); // Hi, Denny!
