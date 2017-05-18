//Shifting the welcome section up upon scroll
//And adjusting navbar height
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 20) {
        $('#welcome').css("top", "-15vh");
        $('.text.home').css("padding-top", "30vh");
        $('.navbar').css("padding", "0px 0px");
        $('.navbar').css("-ms-transform", "scale(1, 1)");
        $('.navbar').css("-webkit-transform", "scale(1, 1)");
        $('.navbar').css("transform", "scale(1, 1)");
    } else {
        $('#welcome').css("top", "0in");
        $('.text.home').css("padding-top", "40vh");
        $('.navbar').css("padding", "10px 0px");
        $('.navbar').css("-ms-transform", "scale(1, 1.015)");
        $('.navbar').css("-webkit-transform", "scale(1, 1.015)");
        $('.navbar').css("transform", "scale(1, 1.015)");
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
    if (left > right) {
        document.getElementById('services').style.height = left;
    } else {
        document.getElementById('yarn').style.height = right;
    }
});

//Set the width of the image on mobile devices and small screens
$(function() {
    var width = $('#width-reference');
    $('.img-wrapper').css("width", width.width() + 4);
});

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
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
