$(document).ready(function() {

    // $('.single-slider-js').slick({
    //     dots: true,
    //     appendDots: $('.comments__dotte'),
    //     appendArrows: $('.comments__arrows'),
    //     prevArrow: '<i class="icon-drop_left"></i>',
    //     nextArrow: '<i class="icon-drop_right"></i>',
    //     speed: 1000,
    //     adaptiveHeight: true,
    //     fade: true,
    //     // cssEase: 'linear',
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows:false,
    //                 fade: false,
    //             }
    //         },
    //     ]
    // })

    // $('.four-slider-js').slick({
    //     dots: true,
    //     arrows:false,
    //     // appendDots: $('.comments__dotte'),
    //     // appendArrows: $('.comments__arrows'),
    //     // prevArrow: '<i class="icon-drop_left"></i>',
    //     // nextArrow: '<i class="icon-drop_right"></i>',
    //     speed: 1000,
    //     adaptiveHeight: true,
    //     slidesToShow: 4,
    //     infinite: false,
    //     // fade: true,
    //     // cssEase: 'linear',
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows:false,
    //                 dots: true,
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ]
    // })

    const comments = new Swiper('.comments-swiper-js', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        speed: 500,
        // effect: "fade",

        // If we need pagination
        pagination: {
            el: '.comments__dotte',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.icon-drop_right',
            prevEl: '.icon-drop_left',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        breakpoints: {
            768: {
                slidesPerView: 1,
                // spaceBetween: 30,

            },
        }
    });

    const logoSlider = new Swiper('.logoSlider-swiper-js', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 3000,
        },
        grabCursor: true,
        // effect: "fade",
        pagination: {
            el: '.logoSlider__doted',
        },

        // If we need pagination
        // pagination: {
        //     el: '.comments__dotte',
        // },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.icon-drop_right',
        //     prevEl: '.icon-drop_left',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        breakpoints: {
            768: {
                slidesPerView: 4,
                // spaceBetween: 30,

            },
        }
    });

    function mobilSlider () {
        let slider = null;
        let slider_trademarks = null;
        let mediaQuerySize = 767;

        function initSlider () {
            if (!slider) {
                slider = new Swiper('.tab-logos-slider-js', {
                    pagination: {
                        el: '.tab-logos-doted',
                    },
                    navigation: {
                        nextEl: '.icon-drop_right',
                        prevEl: '.icon-drop_left',
                    },
                    loop: true,
                    allowTouchMove: false,

                    slidesPerView: 1,
                    spaceBetween: 22,

                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });
            }

            if (!slider_trademarks) {
                slider_trademarks = new Swiper('.tab-trademarks-slider-js', {
                    pagination: {
                        el: '.tab-trademarks-doted',
                    },
                    // allowTouchMove: false,

                    slidesPerView: 1,
                    spaceBetween: 10,

                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });
            }
        }

        function destroySlider () {
            if (slider) {
                // $('.tab-slider-js').slick('unslick');
                slider.destroy();
                slider = null;
            }
            if (slider_trademarks) {
                // $('.tab-slider-js').slick('unslick');
                slider_trademarks.destroy();
                slider_trademarks = null;
            }
        }

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            // console.log(windowWidth);
            if (windowWidth <= mediaQuerySize) {
                initSlider();
                console.log('init');
            } else {
                destroySlider();
                // location.reload();
                console.log('destroy');
            }
        });
    }
    mobilSlider();


});
