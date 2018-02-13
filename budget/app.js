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
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
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
      var html, newHTML, element;
      // create HTML string eith placeholder text
      if (type === 'inc') {
        element = DOMstring.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstring.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // replace placeholder text with some actual data
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', obj.value);
      // insert the html into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

    },
    clearFields: function() {
      var fields,fieldsArr;

      fields = document.querySelectorAll(DOMstring.inputDescription + ',' + DOMstring.inputValue);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function(current, index, array) {
        current.value = '';
      });
      fieldsArr[0].focus();
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
    UICtrl.addListItem(newItem, input.type);
    // clear the fields
    UICtrl.clearFields();
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
