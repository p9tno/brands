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

    function showInfoModal() {
        $('.info_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#infoModal').modal('show');
        });
    }
    showInfoModal();

    $('.modal').on('show.bs.modal', () => {
        // let openedModal = $('.modal.in:not(.popapCalc)');
        let openedModal = $('.modal');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });

    function showCall() {
        $('.call_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#call').modal('show');
        });
    }
    showCall();

    function showMap() {
        $('.map_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#map').modal('show');
        });
    }
    showMap();

    function showModalQuiz() {
        $('.modalQuiz_modal_js').on('click', function (e) {
            e.preventDefault();
             $('#modalQuiz').modal('show');
        });
    }
    showModalQuiz();

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

    function initTabs() {
        $('.tabs-wrapper').each(function() {
            let ths = $(this);
            ths.find('.tab-item').not(':first').hide();
            ths.find('.tab').click(function() {
                ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('active');
        });
    };
    initTabs();

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

            } else {
                $( 'header' ).removeClass( 'stiky' );
            }

        }
    };

    stikyMenu();

    function uploadYoutubeVideoForModal() {
        if ( $( ".js-youtubeModal" ) ) {

            $( '.js-youtubeModal' ).on( 'click', function () {
                $('#modalVideo').modal('show');
                // console.log('click');

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

    function openModalComment() {
        if ( $( ".js-commentModal" ) ) {

            $( '.js-commentModal' ).on( 'click', function (e) {
                e.preventDefault();
                $('#commentModal').modal('show');
                console.log('click');

                let wrapp = $( this ).closest( '.js-commentModal' );

                let content = wrapp.attr('data-content')
                console.log(content);

                $(".commentModal__wraper").html(content);

                $("#commentModal").on('hide.bs.modal', function () {
                    $(".commentModal__wraper").html('');
                });

            } );
        }
    };
    openModalComment();

    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        // anchorPlacement: 'bottom-bottom',
        duration: 1000, // values from 0 to 3000, with step 50ms
        // offset: 20,
        once: true,
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



    function openSidebar() {

        if (localStorage.getItem('collapseSidebar') !== 'collapse') {
            $('.sidebar__collapse').addClass('sidebar__collapse_collapse');
            $('.sidebar__list').addClass('sidebar__list_collapse');
            $('.sidebar__list').slideUp(0);
        }

        if (localStorage.getItem('hideSidebar') !== 'hide') {
            $('.sidebar').addClass('sidebar_hide');
            setTimeout(function(){
                $('.sidebar').removeClass('sidebar_hide');
                localStorage.setItem("hideSidebar", "hide");
            }, 20000);
        }


        $('.sidebar__toggle').click(function(event) {
            $('.sidebar__list').slideUp();
            setTimeout(function(){
              $('.sidebar').toggleClass('sidebar_hide');
            }, 500);
            setTimeout(function(){
              $('.sidebar__list').slideDown();
            }, 3000);

            setTimeout(function(){
              $('.sidebar').toggleClass('sidebar_hide');
          }, 60000);

            if (localStorage.getItem('hideSidebar') == 'hide') {
                localStorage.removeItem("hideSidebar", "hide");

            } else {
                localStorage.setItem("hideSidebar", "hide");
            }

        });

        $('.sidebar__collapse').click(function(event) {
            console.log(localStorage.getItem('collapseSidebar'));

            $('.sidebar__list').toggleClass('sidebar__list_collapse');
            $('.sidebar__collapse').toggleClass('sidebar__collapse_collapse');


            if ($('.sidebar__list').hasClass('sidebar__list_collapse')) {
                $('.sidebar__list').slideUp();
            } else {
                $('.sidebar__list').slideDown();
            }

            if (localStorage.getItem('collapseSidebar') == 'collapse') {
                localStorage.removeItem("collapseSidebar", "collapse");

            } else {
                localStorage.setItem("collapseSidebar", "collapse");
                // console.log('сохранить пару ключ/значение.');
            }

        });

    };

    openSidebar();

    function hideClip() {
        if (localStorage.getItem('hideClip') !== 'hide') {
            $('.clip').addClass('hide');

            setTimeout(function(){
              $('.clip').removeClass('hide');
              localStorage.setItem("hideClip", "hide");
              // console.log('test');
          }, 60000);
        }

        $('.clip-toggle-js').click(function(event) {
            $('.clip').addClass('hide');

            // setTimeout(function(){
            //   $('.clip').removeClass('hide');
            // }, 60000);

            if (localStorage.getItem('hideClip') == 'hide') {
                localStorage.removeItem("hideClip", "hide");

            } else {
                localStorage.setItem("hideClip", "hide");
                // console.log('сохранить пару ключ/значение.');
            }

        });

    }
    hideClip()

    function addNameFile() {
        $('input[type="file"]').change(function (e) {
            // console.log('change');
            var text = $(this).closest('label').attr('data-text');
            // var container = $(this).closest('.tab-item');
            if (typeof e.target.files[0] == 'undefined') {
                var fileName = text;
                $(this).parent().removeClass('active');
            } else {
                var fileName = e.target.files[0].name;
                $(this).parent().addClass('active');
                fileName = fileName.substring(0, 20);
                // console.log(fileName);
            }
            $(this).parent().find('p').text(fileName);
            // container.find('[controlBtn_JS]').removeClass('disabled');
        });

    }
    addNameFile();

    function addImgWrap() {
        $('.alignleft, .alignright').parent().addClass( "img__wrap" );
        $('.alignleft').parent().addClass( "img__wrap_left" );
        $('.alignright').parent().addClass( "img__wrap_right" );
    }
    addImgWrap();

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
    });

    if (localStorage.getItem("language") == "kz") {
        $('input[name=languageCheckbox]').prop('checked', true);
        // console.log(localStorage.getItem('language'));
        // $( 'body' ).toggleClass('dark_theme');
    }

});


$(document).ready(function() {

    if (localStorage.getItem('showModalStop') == 'disable') {
    } else {
        setTimeout(function () {
            $('#stop').modal('show');
        }, 5000);

        $('#closeModalStop').on('click', function() {
            localStorage.setItem('showModalStop', 'disable');
        })
    }
    // localStorage.clear();
});
