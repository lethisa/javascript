$(document).ready(function() {

  // slide down
  $('#flip1').click(function() { // jQuery slideDown() method is used to slide down an element
    $('#panel1').slideDown('slow'); // $(selector).slideDown(speed,callback);
  });

  // slide up
  $('#flip2').click(function() { // jQuery slideUp() method is used to slide up an element
    $('#panel2').slideUp('slow'); // $(selector).slideUp(speed,callback);
  });

  // slide toggle
  $('#flip').click(function() { // jQuery slideToggle() method toggles between the slideDown() and slideUp() methods
    $('#panel').slideToggle('slow'); // $(selector).slideToggle(speed,callback);
  });
});
