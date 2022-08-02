$(document).ready(function() {

    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    preloader();
    // setTimeout( ()=> preloader(),15000 )

    function showStop() {
        $('.stop_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#stop').modal('show');
        });
    }
    showStop();

    function showCall() {
        $('.call_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#call').modal('show');
        });
    }
    showCall();

    function showSentence() {
        $('.sentence_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#sentence').modal('show');
        });
    }
    showSentence();

    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            $('.header__bottom').toggleClass('header__bottom_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();


    function openDropMenu(){
        $('.header .icon-drop').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            let dropBox = $(this).parent().parent().children();
            dropBox.toggleClass('open');
        });
    }
    openDropMenu();

    function openDropMenuFooter(){
        $('.footer__label .icon-drop').on('click', function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('open');
            $(this).parent().parent().parent().find('.menu').toggleClass('open');
        });
    }
    openDropMenuFooter();

    function collapsed() {
        let toggle = $('[data-collapse]');

        toggle.on('click', function() {
            let id = $(this).data('collapse'),
            body = $('[data-collapse-body="'+id+'"]'),
            wrap = body.closest('[data-collapse-wrapper]');

            if (!id) {
                // $('[data-collapse-wrapper]').removeClass('open');
                body = $(this).parent().find('[data-collapse-body]');
                $(this).toggleClass('open');
                if ($(this).hasClass('open')) {
                    body.slideDown();
                } else {
                    body.slideUp();
                }
            } else if (id === 'all') {
                body.slideDown();
                toggle.addClass('open');
            } else {
                body.slideToggle();
                $(this).toggleClass('open');
            }
        });
    }
    collapsed();


    $('.tabs-wrapper').each(function() {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function() {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

    // for select2
    function addIcon(icon) {
        if (!icon.id) {
            return icon.text;
        }

        let $icon = $(
            '<span><span></span><i></i></span>'
        );

        $icon.find("span").text(icon.text);
        $icon.find("i").attr("class", "icon-" + icon.element.value.toLowerCase());

        return $icon;

    }

    $('.select').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        // tags: true,
        templateSelection: addIcon,
    });

    function stikyMenu() {

        let HeaderTop = $( '.header__bottom' ).offset().top;
        // let HeaderTop = $( 'header' ).offset().top + $( '.section' ).innerHeight();
        let currentTop = $( window ).scrollTop();

        setNavbarPosition();

        $( window ).scroll( function () {
            setNavbarPosition();
        } );

        function setNavbarPosition() {
            currentTop = $( window ).scrollTop();

            if ( currentTop > HeaderTop ) {
                $( 'header' ).addClass( 'stiky' );
                // $( '.main_content' ).addClass( 'header-styky' );
                // $('.header__top').hide(1300);
            } else {
                $( 'header' ).removeClass( 'stiky' );
                // $( '.main_content' ).removeClass( 'header-styky' );
                // $('.header__top').show(1300);
            }

        }
    };

    stikyMenu();

    function uploadYoutubeVideoForModal() {
        if ( $( ".js-youtubeModal" ) ) {

            $( '.js-youtubeModal' ).on( 'click', function () {
                $('#modalVideo').modal('show');
                console.log('click');

                // создаем iframe со включенной опцией autoplay
                let wrapp = $( this ).closest( '.js-youtubeModal' );
                let videoId = wrapp.attr( 'id' );
                let iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

                // доп параметры для видоса
                // if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

                // Высота и ширина iframe должны быть такими же, как и у родительского блока
                let iframe = $( '<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'allow': "autoplay"
                } )
                $(".modalVideo__wraper").append(iframe);

                $("#modalVideo").on('hide.bs.modal', function () {
                    $(".modalVideo__wraper").html('');
                });

            } );
        }
    };
    uploadYoutubeVideoForModal();

    // Видео youtube для страницы
    // function uploadYoutubeVideo() {
    //     if ( $( ".js-youtube" ) ) {
    //
    //         $( ".js-youtube" ).each( function () {
    //             // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
    //             $( this ).css( 'background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)' );
    //
    //             // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
    //             $( this ).append( $( '<img src="../wp-content/themes/gymn/assets/img/play.png" alt="Play" class="video__play">' ) );
    //
    //         } );
    //
    //         $( '.video__play, .video__prev' ).on( 'click', function () {
    //             // создаем iframe со включенной опцией autoplay
    //             let wrapp = $( this ).closest( '.js-youtube' ),
    //                 videoId = wrapp.attr( 'id' ),
    //                 iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";
    //
    //             if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );
    //
    //             // Высота и ширина iframe должны быть такими же, как и у родительского блока
    //             let iframe = $( '<iframe/>', {
    //                 'frameborder': '0',
    //                 'src': iframe_url,
    //                 'allow': "autoplay"
    //             } )
    //
    //             // Заменяем миниатюру HTML5 плеером с YouTube
    //             $( this ).closest( '.video__wrapper' ).append( iframe );
    //
    //         } );
    //     }
    // };
    //
    // uploadYoutubeVideo();

    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        // anchorPlacement: 'bottom-bottom',
        duration: 1000, // values from 0 to 3000, with step 50ms
        // offset: 20,
    });

    AOS.init({
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    });

    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.35, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
        orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
        before_label: 'До', // подпись 'до'
        after_label: 'После', // подпись 'после'
        no_overlay: true, // не показывать затемнение с надписями 'до' и 'после'
        move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
        move_with_handle_only: true, // двигать слайдер только за его "бегунок"
        click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
    });

    $(function(){
        $(".tel").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    });


    function disabledButton() {
        $('.check_checked_js').on('change', function () {
            if ( $(this).prop('checked') ) {
                $(this).closest('.form').find('.btn_didisabled_js').attr('disabled', false);

            } else {
                $(this).closest('.form').find('.btn_didisabled_js').attr('disabled', true);
            }
        });

    }
    disabledButton();

    $(function() {
        $('.runningLine__content').marquee({
            duration: 20000,
            startVisible: true,
            duplicated: true
        });
    });


    // console.log(localStorage.getItem('statusSidebar'));
    if (localStorage.getItem('statusSidebar') !== 'active') {
        $('.sidebar__toggle').removeClass('sidebar__toggle_hide');
        $('.sidebar__list').removeClass('sidebar__list_hide');
    }
    function openSidebar() {
        $('.sidebar__toggle').click(function(event) {
            $('.sidebar__toggle').toggleClass('sidebar__toggle_hide');
            $('.sidebar__list').toggleClass('sidebar__list_hide');

            if (localStorage.getItem('statusSidebar') == 'active') {
                localStorage.removeItem("statusSidebar", "active");

            } else {
                localStorage.setItem("statusSidebar", "active");
                // console.log('сохранить пару ключ/значение.');
            }
        });
    };
    openSidebar();




    // function openDetailed() {
    //     $('.btn-detailed').click(function() {
    //         $(this).closest('.detailed').find('.detailed__icon').toggleClass('detailed__icon_active');
    //
    //         if ($(this).closest('.detailed').find('.detailed__content').is(':visible')) {
    //             $(this).closest('.detailed').find('.detailed__content').hide('fast');
    //         }
    //         else {
    //             $(this).closest('.detailed').find('.detailed__content').show('fast');
    //         }
    //     })
    // };
    // openDetailed();

//     .detailed {
//   margin-bottom: 10px;
// }
// .detailed__icon {
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   font-size: 21px;
//   font-weight: bold;
//   transform: rotate(0deg);
//   transition: transform 0.5s;
// }
// .detailed__icon_active {
//   transform: rotate(180deg);
// }
// .detailed__content {
//   display: none;
// }

// <div class="detailed">
//
//     <div class="detailed__button ' . $params[ 'position' ] . '">
//         <button class="btn btn-detailed ' . $params[ 'size' ] .' '. $params[ 'color' ] . '" type="submit">
//             <sapn>Подробнее</sapn><i class="icon-bottom detailed__icon"></i>
//         </button>
//     </div>
//
//     <div class="detailed__content">
//         ' . $params[ 'content' ] . '
//     </div>
//
// </div>







    // start animate numbers
    // function onVisible( selector, callback, repeat = false ) {
    //
    //     let options = {
    //         threshold: [ 0.5 ]
    //     };
    //     let observer = new IntersectionObserver( onEntry, options );
    //     let elements = document.querySelectorAll( selector );
    //
    //     for ( let elm of elements ) {
    //         observer.observe( elm );
    //     }
    //
    //     function onEntry( entry ) {
    //         entry.forEach( change => {
    //             let elem = change.target;
    //             // console.log(change);
    //             // console.log(elem.innerHTML);
    //             if ( change.isIntersecting ) {
    //                 if ( !elem.classList.contains( 'show' ) || repeat ) {
    //                     elem.classList.add( 'show' );
    //                     callback( elem );
    //                 }
    //             }
    //         } );
    //     }
    // }
    //
    // onVisible( '.animate_numbers_js', function ( e ) {
    //     animateNumber( e, e.innerHTML );
    // } );
    //
    // function animateNumber( elem, final, duration = 1000 ) {
    //     let start = 0;
    //     console.log(final);
    //
    //     setInterval( function () {
    //         if ( final >= start ) {
    //             elem.innerHTML = start++;
    //         }
    //     }, duration / final  );
    // }
    // end animate numbers
});



// scrollTop
$(document).ready(function(){
    //отменяем стандартную обработку нажатия по ссылке
    $(".toTop").on("click","a", function (event) {
        event.preventDefault();
        console.log('toTop');
        //забираем идентификатор блока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $('.toTop').fadeIn(900)
        }else{
            $('.toTop').fadeOut(700)
        }
    });
});

// end scrollTop


$(document).ready(function() {
    console.log(localStorage.getItem('language'));

    $('input[name=languageCheckbox]').change(function() {

        if ($(this).is(':checked')) {
            localStorage.setItem("language", "kz");
            $('input[name=languageCheckbox]').prop('checked', true);

        } else {
            localStorage.setItem("language", "ru");
            $('input[name=languageCheckbox]').prop('checked', false);

        }

        // $( 'body' ).toggleClass('dark_theme');
        // console.log(localStorage.getItem('language'));
    });

    if (localStorage.getItem("language") == "kz") {
        $('input[name=languageCheckbox]').prop('checked', true);
        // console.log(localStorage.getItem('language'));
        // $( 'body' ).toggleClass('dark_theme');
    }

});


$(document).ready(function() {

    if (localStorage.getItem('showModalStop') == 'disable') {
        // console.log('disable');
    } else {
        setTimeout(function () {
            $('#stop').modal('show');
        }, 5000);

        $('#closeModalStop').on('click', function() {
            // console.log('stop modal hide click');

            localStorage.setItem('showModalStop', 'disable');
        })
    }
    // localStorage.clear();
});
