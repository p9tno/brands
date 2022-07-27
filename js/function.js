$(document).ready(function() {


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
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

    // function activeNav() {
    //     $('.menu-item').on('click', function() {
    //         console.log('click');
    //         $('.menu-item').removeClass('current-menu-item');
    //         $(this).addClass('current-menu-item');
    //     })
    // };
    // activeNav();


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


    function doDrop() {
        $('.drop__toggle').on('click', function() {
            // $('.drop__list').toggleClass('open');
            $(this).toggleClass('active');
            $(this).closest('.drop').find('.drop__list').toggleClass('open');
        });
    };
    doDrop();



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

        let HeaderTop = $( 'header' ).offset().top;
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
                // $('.header__top').hide(1300);
            } else {
                $( 'header' ).removeClass( 'stiky' );
                // $('.header__top').show(1300);
            }

        }
    };

    stikyMenu();

    // Видео youtube для страницы
    function uploadYoutubeVideo() {
        if ( $( ".js-youtube" ) ) {

            $( ".js-youtube" ).each( function () {
                // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
                $( this ).css( 'background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)' );

                // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
                $( this ).append( $( '<img src="../wp-content/themes/gymn/assets/img/play.png" alt="Play" class="video__play">' ) );

            } );

            $( '.video__play, .video__prev' ).on( 'click', function () {
                // создаем iframe со включенной опцией autoplay
                let wrapp = $( this ).closest( '.js-youtube' ),
                    videoId = wrapp.attr( 'id' ),
                    iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

                if ( $( this ).data( 'params' ) ) iframe_url += '&' + $( this ).data( 'params' );

                // Высота и ширина iframe должны быть такими же, как и у родительского блока
                let iframe = $( '<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'allow': "autoplay"
                } )

                // Заменяем миниатюру HTML5 плеером с YouTube
                $( this ).closest( '.video__wrapper' ).append( iframe );

            } );
        }
    };

    uploadYoutubeVideo();




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

});
