//Disable horizontal scroll (caused by overflow by box)
$(function() {
    var $body = $(document); //Select the document
    $body.bind('scroll', function() {
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0); //Set scroll left to 0
        }
    });

});


// Display about section upon scrolling a small amount
// Not displayed to begin with
// $(function() {
//   $('#about').fadeOut(0);
// })

//Shifting the about section up upon scroll:

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 20) {
    $('#about').css("top", "-1in");
  } else {
    $('#about').css("top", "0in");
  }
});

$(function() {
  var ref = $('#top');
  $('.divider').css("height", ref.height());
});
