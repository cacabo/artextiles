//Disable horizontal scroll
$(function() {

    var $body = $(document); //Select the document
    $body.bind('scroll', function() {
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0); //Set scroll left to 0
        }
    });

});
