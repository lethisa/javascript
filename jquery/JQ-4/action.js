$(document).ready(function() {
  // fade in
  $('button#b1').click(function() { // fadeIn() method is used to fade in a hidden element
    $('#div1').fadeIn(); // $(selector).fadeIn(speed,callback);
    $('#div2').fadeIn('slow'); // "slow", "fast", or milliseconds.
    $('#div3').fadeIn(3000);
  });

  // fade out
  $('button#b2').click(function() {
    $('#div1').fadeOut(); //  fadeOut() method is used to fade out a visible element
    $('#div2').fadeOut('slow');
    $('#div3').fadeOut(3000);
  });

  // fade toogle
  $('button#b3').click(function() {
    $('#div1').fadeToggle(); // fadeToggle() method toggles between the fadeIn() and fadeOut() methods
    $('#div2').fadeToggle('slow');
    $('#div3').fadeToggle(3000);
  });

  // fade to
  $('button#b4').click(function() { // jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1)
    $('#div1').fadeTo('slow', 0.15); // $(selector).fadeTo(speed,opacity,callback);
    $('#div2').fadeTo('slow', 0.4);
    $('#div3').fadeTo('slow', 0.7);
  });

});
