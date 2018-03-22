// set value

$(document).ready(function() {

  // set text
  $('#b1').click(function(){
    $('#p1').text('Hellow !!!');
  });

  // set html
  $('#b2').click(function(){
    $('#p2').html('<b>Hello Brey !</b>');
  });

  // set value
  $('#b3').click(function(){
    $('#p3').val('Donald Dcuk');
  });

  // using callback function
  $('#b4').click(function(){
    $('#p4').text(function(i, origText){
      return 'Old text: ' + origText + ' New Text: Hello World! (index: ' + i + ')';
    });
  });

  $('#b5').click(function(){
    $('#p5').html(function(i, origText){
      return 'Old html: ' + origText + ' New HTML: Hello <b>World!</b> (index: ' + i + ')';
    });
  });

});
