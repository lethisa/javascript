////////////////////////////////////////////////////// DATA MODULE

var budgetController = (function() { // => IIFE
  var x = 23;
  var add = function(a) {
    return x + a;
  };
  return {
    publicTest: function(b) { // => can access outside var because closure
      return add(b);
    }
  };
})();

// budgetController.publicTest(6); // => tes public module

////////////////////////////////////////////////////// UI MODULE

var UIController = (function() {

})();

////////////////////////////////////////////////////// CONTROLLER

var controller = (function(budgetCtrl, UICtrl) { // => control another separate module

var z = budgetCtrl.publicTest(6);
return {
  anotherPublic: function(){
    console.log(z);
  }
};

})(budgetController, UIController);

// controller.anotherPublic(); // => access public method
