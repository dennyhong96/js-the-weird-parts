// Factory functions are possible because of Closure feature of JavaScript
const greetFunctionFactory = (lang) => {
  // anon function returned below can access outer variable `lang` when executed
  return (fname, lname) => {
    if (lang === "en") {
      console.log(`Hello, ${fname} ${lname}`);
    }

    if (lang === "es") {
      console.log(`HOLA, ${fname} ${lname}`);
    }
  };
};

// `greetEnglish` is enclosed with variable `lang` value of "en"
const greetEnglish = greetFunctionFactory("en");

// `greetSpanish` is enclosed with variable `lang` value of "es"
const greetSpanish = greetFunctionFactory("es");

greetEnglish("Denny", "Hong"); // "Hello, Denny Hong"
greetSpanish("Denny", "Hong"); // "HOLA, Denny Hong"
