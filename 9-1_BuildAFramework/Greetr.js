// Use IIFE to create a new execution context, safe code
(function (global, $) {
  const Greetr = function (firstname, lastname, language) {
    // `new` keyword creates an empty object
    // `this` points to it in function constructor
    return new Greetr.init(firstname, lastname, language);
  };

  // "Private vars" that will not be exposed out side of Greetr
  const SUPPORTED_LANGS = ["en", "es"];
  const GREETINGS = { en: "Hello", es: "Hola" };
  const FORMAL_GREETINGS = { en: "Greetings", es: "Saludos" };
  const LOG_MSGS = { en: "Logged in", es: "Inicio sesion" };

  // Any methods user will be able to use on Greetr object later
  // Define methods on prototype to save memory
  Greetr.prototype = {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    validate() {
      // SUPPORTED_LANGS is accessable during runtime because of closure
      if (!SUPPORTED_LANGS.includes(this.language)) {
        throw "INVALID_LANGUAGE";
      }
    },
    greeting() {
      return `${GREETINGS[this.language]}, ${this.firstname}!`;
    },
    formalGreeting() {
      return `${FORMAL_GREETINGS[this.language]}, ${this.fullname()}!`;
    },
    greet(formal) {
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      // `this` refers to the calling object at execution time
      // makes the method chainable
      return this;
    },
    log() {
      // IE doesn't have a console unless console is open
      if (console) {
        console.log(`${LOG_MSGS[this.language]} : ${this.fullname()}`);
      }
      return this;
    },
    setLang(newLang) {
      this.language = newLang;
      this.validate(); // validate
      return this;
    },
  };

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
