/////////////////////////
// FUNCTION EXPRESSION //
/////////////////////////

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

// another way with IIFE (Immediately Invoked Function Expressions)
// v1 - private variable/ data privacy
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

//console.log(score);

// v2
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
