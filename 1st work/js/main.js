// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 0) {
        $('.header').addClass('sticky');
 }
 else {
        $('.header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.header').hasClass('open-nav')) {
        $('.header').removeClass('open-nav');
        $('.header').removeClass('sticky-menu');
        $("ul li").hide();
    } else {
        $('.header').addClass('open-nav');
        $('.header').addClass('sticky-menu');
         $("ul li").show();
    }
});

$('.header li a').click(function() {
    if ($('.header').hasClass('open-nav')) {
        $('.nav').removeClass('open-nav');
        $('.header').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav ul li a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1000);
    event.preventDefault();
});