$(document).ready(function() {

  // The jQuery stop() method is used to stop an animation or effect before it is finished
  // $(selector).stop(stopAll,goToEnd);

  // stop method
  $('#flip').click(function() {
    $('#panel').slideDown(5000);
  });
  $('#stop').click(function() {
    $('#panel').stop();
  });

  // stop with parameter
  $('#start').click(function(){
    $('div#animate').animate({left: '100px'},5000);
    $('div#animate').animate({fontSize: '3em'},5000);
  });

  $('#stop').click(function(){
    $('div#animate').stop();
  });

  $('#stop2').click(function(){
    $('div#animate').stop(true);
  });

  $('#stop3').click(function(){
    $('div#animate').stop(true, true);
  });

});
