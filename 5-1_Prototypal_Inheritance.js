const person = {
  firstname: "Default",
  lastname: "Default",
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  },
};

const john = {
  firstname: "John",
  lastname: "Doe",
};

// console.log(john.getFullname()); // Error

// NEVER set obj.__proto__ directly, for learning pupose only ***
// Set john to inherit person prototypally
// person is one level below john on john's prototype chain
john.__proto__ = person;

// When JS cannot find a property or method on an object itself,
// It goes down the object's prototype chain level by level and
// grab first match.
// Execution context of inherited methods are aware of orginal caller
console.log(john.getFullname()); // John Doe

const jane = {
  firstname: "Jane",
};

jane.__proto__ = john;
console.log(jane.firstname); // Jane -> comes from itself
console.log(jane.lastname); // Doe -> comes from John, 1 level below on prototype chain
console.log(jane.getFullname()); // comes from person, 2 level below on prototype chain
