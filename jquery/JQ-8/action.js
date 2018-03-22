/**
 * JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished.
 * A callback function is executed after the current effect is 100% finished.
 */

$(document).ready(function(){

  // witch callback
  $('button#callyes1').click(function(){
    $('p#callyes2').hide('slow',function(){
      alert('Hidden Paragraf');
    });
  });

  // no callback
  $('button#callno1').click(function(){
    $('p#callno2').hide(1000);
    alert('Hidden Paragraf');
  });
});
