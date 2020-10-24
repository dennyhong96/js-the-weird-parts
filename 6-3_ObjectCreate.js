const person = {
  firstname: "Default",
  lastname: "Default",
};

person.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

// Pass in object to use as prototype, may be null
const denny = Object.create(person);
denny.firstname = "Denny";
denny.lastname = "hong";
console.log(denny.__proto__); // { firstname: 'Default', lastname: 'Default' }

console.log(denny.getFullname()); // Denny hong
