// Gets a new Greetr object (we architect our library so that no `new` keyword is required)
const g = G$("John", "Doe");

// Using chainable methods because we returned `this` for every method
g.greet().greet(true).setLang("es").greet().log();

// Using Greetr upon a button click
$("#login").click(function () {
  // Init a Greetr instance
  const loginGrtr = G$("John", "Doe");

  // Hide UI
  $("#logindiv").hide();

  // Fire off an HTML greeting, passing `#greeting` as selector, pass in lang, logs the msg
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
