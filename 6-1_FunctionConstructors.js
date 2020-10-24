// Function Constructors: A normal function that is used to construct objects

function Person(firstname, lastname) {
  console.log(this); // {}

  this.firstname = firstname;
  this.lastname = lastname;

  console.log(this); // { firstname:"...", lastname:"..." }

  // As long as ** I don't return anything **, the "new" keyword
  // will return `this` object automatically
}

// When `new` keyword is used before a function call, an empty
// object {} is constructed.
// And the `Person` function's `this` is set to the empty
// object.
// Then the `Person` function is executed, the `this` object
// will be returned automatically.
const denny = new Person("Denny", "hong");
console.log(denny); // Person { firstname: 'Denny', lastname: 'hong' }

// All function has a .prototype property, that is only used when the
// function is used as a function constructor (i.e. `new` keyword is used)
// .prototype is NOT the prototype of the function
// Its the prototype of any object constructed by the function ***
console.log(Person.prototype); // Person {} .prototype starts off as an empty obj
console.log(denny.__proto__); // Person {}

// Add properties / methods to .prototype
Person.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

// Any object constructed by `Person` function now has .getFullname() method
// inside its .__proto__
console.log(Person.prototype); // Person { getFullname: [Function] }
console.log(denny.__proto__); // Person { getFullname: [Function] }
console.log(denny.getFullname()); // "Denny hong"

// For any object created by a function constructor, I can add a
// common property / method to all of them at once by simply adding the
// property / method on the common function constructor

// Best Practices:
// Its good practice to setup properties inside function constructors
// as they tends to hold different values being passed in when used.
// Methods should be setup later on the .prototype because that way
// it only takes up the memory space of one copy instead of N copies
// (N being number of objects created using the function constructor)
// When that method is being called on an object, it will simply go
// down prototype chain and grab it
