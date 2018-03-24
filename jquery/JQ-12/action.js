/**
 * append() - Inserts content at the end of the selected elements
 * prepend() - Inserts content at the beginning of the selected elements
 * after() - Inserts content after the selected elements
 * before() - Inserts content before the selected elements
 */

$(document).ready(function() {

  // append
  $('#btn1').click(function() {
    $('p#p1').append('<b>appended text</b>');
  });

  $('#btn2').click(function() {
    $('ol#l1').append('<li>appended item</li>');
  });

  // prepend
  $('#btn3').click(function() {
    $('p#p1').prepend('<b>prepend text</b>');
  });

  $('#btn4').click(function() {
    $('ol#l1').prepend('<li>prepend item</li>');
  });

});
