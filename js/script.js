//Shifting the welcome section up upon scroll
//And adjusting navbar height
var p1 = $('#text-home').css("padding-top");
var p2 = (parseInt(p1) - 50) + "px";
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 20) {
        $('#welcome').css("top", "-15vh");
        $('.text.home').css("padding-top", p2);
        $('.navbar').css("padding", "0px 0px");
        $('.navbar').css("-ms-transform", "scale(1, 1)");
        $('.navbar').css("-webkit-transform", "scale(1, 1)");
        $('.navbar').css("transform", "scale(1, 1)");
    } else {
        $('#welcome').css("top", "0in");
        $('.text.home').css("padding-top", p1);
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
            $('.alert--loading').slideDown(250);
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.html('<div class="alert alert--success">Message sent!</div>');
            $('.alert--success').slideDown(250);
        },
        error: function(err) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
            $('.alert--error').slideDown(250);
        }
    });
});
