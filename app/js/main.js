// Home slider
$('.home_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    mouseDrag: false,
    items: 1,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
});

// Mobile menu
$('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('body').toggleClass('no_scroll');
    $('.header-menu').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.header-menu').removeClass('active');
        $('body').removeClass('no_scroll');
    }
    e.stopPropagation();
});

// Video
$('body').on('click', '.play', function (){
    // $('.top_video')[0].paused ? $('.top_video')[0].play() : $('.top_video')[0].pause();

    if ($('.top_video')[0].paused) {
        $('.top_video')[0].play();
    } else {
        $('.top_video')[0].pause();
    }
    $(this).toggleClass('active');
});

// staff-slider
$('.staff-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    // cente:true,
    mouseDrag: false,
    // items: 1,
    responsive : {
        0: {
            items: 1
        },
        560: {
            items: 2
        },
        768: {
            items: 5
        }
    }
});
