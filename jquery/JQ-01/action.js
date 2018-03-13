// jQuery Syntax
// The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

// Basic syntax is: $(selector).action()

// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements => selector (element, id, class)
// A jQuery action() to be performed on the element(s)

// document ready event => prevent any jQuery code from running before the document is finished loading (is ready)

$(document).ready(function() {
  // hide action - element selector
  $('#btn-hide').click(function() {
    $('p').hide(); // p => element selector
  });

  // hide action - id selector
  $('#btn-hide-1').click(function() {
    $('p#text-1').hide(); // selects all <p> elements with id="text-1"
  });

  // hide action - class selector
  $('#btn-hide-2').click(function() {
    $('p.text-2').hide(); // // selects all <p> elements with class="text-2"
  });

  // show action - element selector
  $('#btn-show').click(function() {
    $('p').show();
  });

  // show action - id selector
  $('#btn-show-1').click(function() {
    $('p#text-1').show();
  });

  // show action - class selector
  $('#btn-show-2').click(function() {
    $('p.text-2').show();
  });

  // hide action - all
  $('#btn-hide-all').click(function() {
    $('*').hide(); // * => select all elements
  });

  // hide action - this
  $('#btn-hide-this').click(function() {
    $(this).hide(); // selects the current HTML element
  });

});
