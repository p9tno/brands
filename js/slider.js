$(document).ready(function() {

    $('.single-slider-js').slick({
        dots: true,
        appendDots: $('.comments__dotte'),
        appendArrows: $('.comments__arrows'),
        prevArrow: '<i class="icon-drop_left"></i>',
        nextArrow: '<i class="icon-drop_right"></i>',
        speed: 1000,
        adaptiveHeight: true,
        fade: true,
        // cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                    fade: false,
                }
            },
        ]
    })

    $('.four-slider-js').slick({
        dots: true,
        arrows:false,
        // appendDots: $('.comments__dotte'),
        // appendArrows: $('.comments__arrows'),
        // prevArrow: '<i class="icon-drop_left"></i>',
        // nextArrow: '<i class="icon-drop_right"></i>',
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 4,
        infinite: false,
        // fade: true,
        // cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                    dots: true,
                    slidesToShow: 1,
                }
            },
        ]
    })

});
