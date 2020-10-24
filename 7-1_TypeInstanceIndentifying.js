const a = 1;
console.log(typeof a); // number

const b = "Hello";
console.log(typeof b); // string

const c = true;
console.log(typeof c); // boolean

let d;
console.log(typeof d); // undefined

const e = null;
console.log(typeof e); // object ***

const f = {};
console.log(typeof f); // object

const g = [];
console.log(typeof g); // object
console.log(Object.prototype.toString.call(g)); // [object Array]

const h = function () {};
console.log(typeof h); // function

const Person = function (fname, lname) {
  this.fname = fname;
  this.lname = lname;
};

const denny = new Person("Denny", "Hong");

console.log(typeof denny); // object
console.log(denny instanceof Person); // true
console.log(denny instanceof Object); // true
