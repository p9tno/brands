$(document).ready(function() {


    const comments = new Swiper('.comments-swiper-js', {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 5000,
        },
        pagination: {
            el: '.comments__dotted',
        },
        navigation: {
            nextEl: '.icon-drop_right',
            prevEl: '.icon-drop_left',
        },
    });

    const youtube = new Swiper('.youtubeBox-swiper-js', {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 5000,
        },
        pagination: {
            el: '.youtubeBox__dotted',
        },
        navigation: {
            nextEl: '.icon-arrow_long_right',
            prevEl: '.icon-arrow_long_left',
        },
        spaceBetween: 10,
    });

    const blog = new Swiper('.blog-swiper-js', {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 5000,
        },
        pagination: {
            el: '.blog__dotted',
        },
        navigation: {
            nextEl: '.icon-arrow_long_right',
            prevEl: '.icon-arrow_long_left',
        },
        spaceBetween: 22,
        breakpoints: {
            768: {
                spaceBetween: 38,
                slidesPerView: 2,
            },
        }
    });

    const logoSlider = new Swiper('.logoSlider-swiper-js', {
        // loop: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 5000,
        },
        grabCursor: true,
        pagination: {
            el: '.logoSlider__doted',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        }
    });

    const teamSlider = new Swiper('.team-swiper-js', {
        loop: true,
        slidesPerView: 1,
        speed: 500,
        autoplay: {
          delay: 5000,
        },
        pagination: {
            el: '.team__dotted',
        },
        dynamicBullets: true,
        navigation: {
            nextEl: '.icon-arrow_long_right',
            prevEl: '.icon-arrow_long_left',
        },
        spaceBetween: 22,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 34,
            },
        }
    });

    function mobilSlider () {
        let slider_services = null;
        let slider_conditions = null;
        let mediaQuerySize = 767;

        function initSlider () {
            if (!slider_services) {
                slider_services = new Swiper('.services-swiper-js', {

                    pagination: {
                        el: '.services__dotted',
                    },

                    slidesPerView: 1,
                    spaceBetween: 22,

                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });
            }

            if (!slider_conditions) {
                slider_conditions = new Swiper('.conditions-swiper-js', {

                    pagination: {
                        el: '.conditions__dotted',
                    },

                    slidesPerView: 1,
                    spaceBetween: 22,

                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                });
            }

        }

        function destroySlider () {
            if (slider_services) {
                slider_services.destroy();
                slider_services = null;
            }

            if (slider_conditions) {
                slider_conditions.destroy();
                slider_conditions = null;
            }
        }

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                initSlider();
                console.log('init');
            } else {
                destroySlider();
                console.log('destroy');
            }
        });
    }
    mobilSlider();

});

jQuery(function($){
  let windowWidth = $(window).width();
  let windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});
