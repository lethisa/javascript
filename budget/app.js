////////////////////////////////////////////////////// BUDGET CONTROLLER

var budgetController = (function() {
  // function constructor
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // data structure
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      // create new id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // => last ID + 1
      } else {
        ID = 0;
      }
      // create new item based on 'nc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      // push it into our data structure
      data.allItems[type].push(newItem);
      // return the new element
      return newItem;
    }
  };

})();

////////////////////////////////////////////////////// UI CONTROLLER

var UIController = (function() {

  // store class variable
  var DOMstring = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() { // => private method get value
      return {
        type: document.querySelector(DOMstring.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstring.inputDescription).value,
        value: document.querySelector(DOMstring.inputValue).value
      };
    },
    addListItem: function(obj, type) {
      // create HTML string eith placeholder text
      '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class = "right clearfix" ><div class = "item__value"> +2, 100.00 </div><div class = "item__delete" > < button class = "item__delete--btn" ><i class = "ion-ios-close-outline" > < /i></button > < /div></div > < /div>';
      // replace placeholder text with some actual data
      // insert the html into the DOM
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
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    // get the field input data
    input = UICtrl.getInput();
    // add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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
