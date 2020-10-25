// Use IIFE to create a new execution context, safe code
(function (global, $) {
  const Greetr = function (firstname, lastname, language) {
    // `new` keyword creates an empty object
    // `this` points to it in function constructor
    return new Greetr.init(firstname, lastname, language);
  };

  // Any methods user will be able to use on Greetr object later
  Greetr.prototype = {};

  // Function constructors
  Greetr.init = function (firstname, lastname, language) {
    const self = this; // Just to be safe
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };

  // The instance user created via function constructor can use
  // same methods as on Greetr object's prototype
  Greetr.init.prototype = Greetr.prototype;

  // Expose the Greetr function
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
