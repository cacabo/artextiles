//AJAX for formspree
//Credit: https://gist.github.com/edmundojr/975b08c39ab0a7a1b514
var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'https://formspree.io/cameron.cabo@yahoo.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $('#errors').html('<div class="alert alert-info">Sending message…</div>');
        },
        success: function(data) {
            $('#errors').html('<div class="alert alert-success">Message sent!</div>');
            $contactForm.slideUp(200);
        },
        error: function(err) {
            $('#errors').html('<div class="alert alert-warning">Oops! There was an error. Check the form and try again.</div>');
        }
    });
});
