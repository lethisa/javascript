/**
 * jQuery Event Methods
 */

$(document).ready(function() {
  // click
  $('#p1').click(function() {
    $(this).hide();
  });

  // hover
  /*$('#p1').hover(function() {
    alert('hover');
  });*/

  // double click
  $('#p2').dblclick(function() {
    $(this).hide();
  });

  // mouse enter
  /*$('#p3').mouseenter(function() {
    alert('Hai');
  });*/

  // mouse leave
  /*$('#p3').mouseleave(function() {
    alert('Bye');
  });*/

  // focus
  $('input').focus(function() {
    $(this).css('background-color', 'orangered');
  });

  // blur
  $('input').blur(function() {
    $(this).css('background-color', 'gray');
  });

  // multiple event
  $('#p4').on({
    mouseenter: function() {
      $(this).css('background-color', 'lightblue');
    },
    mouseleave: function(){
      $(this).css('background-color', 'lightgray');
    },
    click: function(){
      $(this).css('background-color', 'yellow');
    }

  });


});
