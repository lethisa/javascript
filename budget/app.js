////////////////////////////////////////////////////// BUDGET CONTROLLER

var budgetController = (function() {

})();

////////////////////////////////////////////////////// UI CONTROLLER

var UIController = (function() {

  // store class variable
  var DOMstring = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() { // => private method get value
      return {
        type: document.querySelector(DOMstring.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstring.inputDescription).value,
        value: document.querySelector(DOMstring.inputValue).value
      };
    },
    getDOMstrings: function() { // => public method
      return DOMstring;
    }
  };
})();

////////////////////////////////////////////////////// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    // => event listener
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // get the field input data
    var input = UICtrl.getInput();

    // add the item to the budget controller
    // add the item to the ui
    // calculate the budgetCtrl
    // display the budget on the ui
  };
  return {
    init: function() { // => public method for event listener
      setupEventListeners();
    }
  };

})(budgetController, UIController);

////////////////////////////////////////////////////// INITIALIZATION
controller.init(); // => public method call event listener
