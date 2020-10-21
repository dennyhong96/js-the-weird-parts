// Classic Closure Problem
const builderFunctions = () => {
  const arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      // Below anon func closed in the value of outer variable `i`
      // However the value of `i` will be when the anon is executed
      () => {
        console.log(i);
      }
    );
  }

  // At this point value of `i` is 3
  return arr;
};

const funcs = builderFunctions();

funcs[0](); // 3 - when this is called value of `i` is 3
funcs[1](); // 3 - when this is called value of `i` is 3
funcs[2](); // 3 - when this is called value of `i` is 3

/* ---------------------------------------------------------------------------------- */

// ES6 solution - let
const builderFunctions = () => {
  const arr = [];

  for (let i = 0; i < 3; i++) {
    // let is scoped to the block, every iteration a new `i` is created.
    arr.push(() => {
      console.log(i);
    });
  }

  return arr;
};

const funcs = builderFunctions();

funcs[0](); // 0 - when this is called value of `i` is 1
funcs[1](); // 1 - when this is called value of `i` is 2
funcs[2](); // 2 - when this is called value of `i` is 3

/* ---------------------------------------------------------------------------------- */

// ES5 solution - IIFE
const builderFunctions = () => {
  const arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      // Below IIFE creates a new execution context, provide variable `j` for the inner anon
      // `j` preserves the value of `i` at current iteration
      ((j) => {
        return () => {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
};

const funcs = builderFunctions();

funcs[0](); // 0 - when this is called value of `j` is 1
funcs[1](); // 1 - when this is called value of `j` is 2
funcs[2](); // 2 - when this is called value of `j` is 3
