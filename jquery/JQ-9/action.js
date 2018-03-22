/**
 * With jQuery, you can chain together actions/methods.
 * Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
 */

$(document).ready(function(){

  // chaining
  $('button#b1').click(function(){
    $('#p1').css('color','red').slideUp(2000).slideDown(2000);
  });

  // different format
  $('button#b2').click(function(){
    $('#p2').css('color','green')
    .slideUp(2000)
    .slideDown(2000);
  });
});
