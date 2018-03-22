$(document).ready(function() {
  // animate
  $('button#b1').click(function() {
    $('div#a1').animate({
      left: '250px'
    }); // $(selector).animate({params},speed,callback);
  });

  // multiple properties
  // all property names must be camel-cased when used with the animate() method
  $('button#b2').click(function() {
    $('div#a2').animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });

  // using relative values, putting += or -=
  $('button#b3').click(function() {
    $('div#a3').animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });

  // using pre-defined values - value as "show", "hide", or "toggle"
  $('button#b4').click(function() {
    $('div#a4').animate({
      height: 'toggle'
    });
  });

  // using queue functionality
  // if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE
  $('button#b5').click(function() {
    var div = $('div#a5');
    div.animate({
      height: '300px',
      opacity: '0.4'
    }, 'slow');
    div.animate({
      width: '300px',
      opacity: '0.8'
    }, 'slow');
    div.animate({
      heigh: '100px',
      opacity: '0.4'
    }, 'slow');
    div.animate({
      width: '100px',
      opacity: '0.8'
    }, 'slow');
  });

  // custom animation
  $('button#b6').click(function(){
    var div = $('div#a6');
    div.animate({left: '100px'}, 'slow');
    div.animate({fontSize: '3em'}, 'slow');
  });
});
