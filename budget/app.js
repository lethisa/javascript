////////////////////////////////////////////////////// BUDGET CONTROLLER

var budgetController = (function() {

})();



////////////////////////////////////////////////////// UI CONTROLLER

var UIController = (function() {

  return {
    getInput: function() {
      return {
        type: document.querySelector(".add__type").value, // will be either inc or exp
        description: document.querySelector(".add__description").value,
        value: document.querySelector(".add__value").value
      };
    }
  };
})();

////////////////////////////////////////////////////// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // 1. get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. add the item to the budget controller
    // 3. add the item to the ui
    // 4. calculate the budgetCtrl
    // 5. display the budget on the ui
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
