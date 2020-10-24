// Just a Syntactic sugar for prototypal inheritance
// `class` is not only a blue print in JavsScript
// It still creates an object
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hello, ${this.firstname} ${this.lastname}.`;
  }
}

const denny = new Person("Denny", "Hong");
console.log(denny.__proto__); // Person {}
console.log(denny.greet()); //Hello, Denny Hong.

// extends keyword sets the prototype of the "class"
class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname); // Call's superclass's constructor
  }

  // Overwrite methods on superclass
  greet() {
    return `Yo, ${this.firstname}!`;
  }
}

const sharon = new InformalPerson("Sharon", "Zhang");
console.log(sharon.__proto__); // Informal Person {}
console.log(sharon.__proto__.__proto__); // Person {}
console.log(sharon.greet()); // "Yo, Sharon!"
