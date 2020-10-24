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

// Anti-pattern, For learning purpose only:
john.__proto__ = person;

// This will also log John's properties,
// as well as John's prototype (person)'s properties
for (let prop in john) {
  console.log(`${prop} : ${john[prop]}`);
}

/*
firstname : John
lastname : Doe
getFullname : getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
*/

/* ---------------------------------------------------------------------------------- */
/* ------------------------------------ Reflection ---------------------------------- */
/* ---------------------------------------------------------------------------------- */

// Use object.hasOwnProperty() to check if properties
// are actually on John object itself (Object Reflection)
// (object.hasOwnProperty() is a method of base object{})
for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(`${prop} : ${john[prop]}`);
  }
}

/*
firstname : John
lastname : Doe
*/

/* ---------------------------------------------------------------------------------- */
/* -------------------------------------- Extend ------------------------------------ */
/* ---------------------------------------------------------------------------------- */

// Use property/methods of other objects without putting them on the prototype chain.

const jane = {
  address: "111 Main St.",
  getFormalFullname() {
    return `${this.lastname} ${this.firstname}`;
  },
};

const jim = {
  getFirstname() {
    return firstname;
  },
};

const newJohn = Object.assign(john, jane, jim);
const newJohn2 = { ...john, ...jane, ...jim };

console.log(newJohn);
console.log(newJohn2);

/*
{
  firstname: 'John',
  lastname: 'Doe',
  address: '111 Main St.',
  getFormalFullname: [Function: getFormalFullname],
  getFirstname: [Function: getFirstname]
}
*/
