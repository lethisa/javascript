////////////////////////////////////////////////////// BUDGET CONTROLLER

var budgetController = (function() {

})();



////////////////////////////////////////////////////// UI CONTROLLER

var UIController = (function() {

})();

////////////////////////////////////////////////////// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // 1. get the field input DATA
    // 2. add the item to the budget controller
    // 3. add the item to the ui
    // 4. calculate the budgetCtrl
    // 5. display the budget on the ui
    console.log("HI");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
