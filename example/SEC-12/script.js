///////////
// SCOPE //
///////////

var a = "hello"; // var => global

first();

function first() { // var => local
  var b = "hi";
  second();

  function second() {
    var c = "hey";
    console.log(a + b + c);
  }
}

// scope chain up to parents
