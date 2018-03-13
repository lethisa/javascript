// $(selector).hide(speed,callback);

$(document).ready(function() {
  // hide ++
  $('.ex .hide').click(function() {
    $(this).parent('.ex').hide('slow');
  });

  // hide + speed
  $('p').click(function() {
    $(this).hide(1000);
  });

  // tooggle
  $('button').click(function() {
    $('p#p1').toggle();
  });


});
