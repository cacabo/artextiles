//Disable horizontal scroll
$(function() {

    var $body = $(document); //Select the document
    $body.bind('scroll', function() {
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0); //Set scroll left to 0
        }
    });

});


// Display about section upon scrolling a small amount
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 20) {
    $('#about').fadeIn();
  } else {
    $('#about').fadeOut();
  }
});
