/**
 * text() - Sets or returns the text content of selected elements
 * html() - Sets or returns the content of selected elements (including HTML markup)
 * val() - Sets or returns the value of form fields
 */

$(document).ready(function() {

  // DOM manipulation
  // get text
  $('#b1').click(function() {
    alert('text: ' + $('#p1').text());
  });
  // get html
  $('#b2').click(function() {
    alert('text: ' + $('#p1').html());
  });

  // get value
  $('#b3').click(function(){
    alert('value: ' + $('#test').val());
  });

  // get attribute
  $('#b4').click(function(){
    alert($('#w3s').attr('href'));
  });

});
