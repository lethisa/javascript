////////////////////////////////////////////////////// BUDGET CONTROLLER

var budgetController = (function() {

})();



////////////////////////////////////////////////////// UI CONTROLLER

var UIController = (function() {

})();

////////////////////////////////////////////////////// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {
document.querySelector(".add__btn").addEventListener("click", function() {
    // 1. get the field input DATA
    // 2. add the item to the budget controller
    // 3. add the item to the ui
    // 4. calculate the budgetCtrl
    // 5. display the budget on the ui
});

})(budgetController, UIController);
