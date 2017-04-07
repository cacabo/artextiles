//Disable horizontal scroll (caused by overflow by box)
$(function() {
    var $body = $(document); //Select the document
    $body.bind('scroll', function() {
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0); //Set scroll left to 0
        }
    });

});


// Display welcome section upon scrolling a small amount
// Not displayed to begin with
// $(function() {
//   $('#welcome').fadeOut(0);
// })

//Shifting the welcome section up upon scroll:

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 20) {
    $('#welcome').css("top", "-15vh");
    $('.text.home').css("padding-top", "30vh");
  } else {
    $('#welcome').css("top", "0in");
    $('.text.home').css("padding-top", "40vh");
  }
});

//Set height of dividers to that of the navbar
$(function() {
  var ref = $('#top');
  $('.divider').css("height", ref.height());
});

//Set height of image wrapper to that of the about text
$(function() {
  var ref = $('#about-text');
  $('#about-img').css("height", ref.height());
});

//Set height of image wrapper to that of the quality text
$(function() {
  var ref = $('#quality-text');
  $('#quality-img').css("height", ref.height());
});

//Set height of image wrapper to that of the quality text
$(function() {
  var right = document.getElementById('services').style.height;
  var left = document.getElementById('yarn').style.height;
  if(left > right) {
      document.getElementById('services').style.height = left;
  }
  else {
      document.getElementById('yarn').style.height = right;
  }
});
