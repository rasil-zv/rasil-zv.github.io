$(window).on('load', function () {
    var maxW = 0;
    $('.slides-container').slick({
        infinite: true,
        prevArrow: $('.slider-arrow.-prev'),
        nextArrow: $('.slider-arrow.-next'),
        dots: true,
        variableWidth: true,
        centerMode: true,
        dotsClass: 'carousel-dots',
        mobileFirst: true,
    });

    $('.carousel-dots button').each(function () {
        $(this).html('');
    });

    $('.slide-description').css('max-width', $(window).width());
    $('.slide-description').css('margin-left', $('.slide-description').width() / 100);

    $('.side-menu').css('margin-top', $('.menu-sections').height());
    // $('.side-menu').css('height', ($(window).height() - $('.header-region').height() - $('.menu-sections').height()));
    $('.side-menu').css('margin-left', -($('.side-menu').width() + 90));

    $('.vidget').on('click', function () {
        if (!$('.cross').hasClass('-active')) {
            $('.cross').addClass('-active').css('display', 'block');
        }
        var docHeight = $(document).height() - ($('.header-region').height() + $('.menu-sections').height());
        $("body").append("<div id='overlay'></div>");
        $("body").css('overflow', 'hidden');
        $("#overlay")
            .height(docHeight)
            .css({
                'opacity': 0.7,
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'margin-top': ($('.header-region').height() + $('.menu-sections').height()),
                'background-color': 'black',
                'width': '100%',
                'z-index': 1
            });
        $('.side-menu').animate({ 'margin-left': '0px' }, 500);
    });

    $('.cross').on('click', function () {
        $("body").css('overflow', 'unset');
        $('#overlay').remove();
        $('.cross').removeClass('-active').css('display', 'none');
        $('.side-menu').animate({ 'margin-left': -($('.side-menu').width() + 90) }, 500);
    });
});

$(window).on('load', function () {
    $('.description-title .title.-description').on('click', function () {
        $('.description-title .title').each(function () {
            $(this).removeClass('-active');
            $('.description-content .content').removeClass('-active');
        });

        $(this).addClass('-active');
        $('.description-content .content.-description').addClass('-active');
    });

    $('.description-title .title.-scheme').on('click', function () {
        $('.description-title .title').each(function () {
            $(this).removeClass('-active');
            $('.description-content .content').removeClass('-active');
        });

        $(this).addClass('-active');
        $('.description-content .content.-scheme').addClass('-active');
    });
});

$(window).on('load', function () {
    $('.date-table td').on('click', function (e) {
        if ($(this).html() != "") {
            if ($(this).hasClass('-active')) {
                $(this).removeClass('-active');
            } else {
                $('.date-table td').each(function () {
                    $(this).removeClass('-active');
                });
                $(this).addClass('-active');
            }
        }
    });
});

$(window).on('load', function () {
    $('.input-button .title').on('click', function () {
        console.log('nice');

        if (!$(this).siblings('.search-select').hasClass('-active')) {

            $('.search-select').each(function () {
                $(this).removeClass('-active');
            });

            $(this).siblings('.search-select').addClass('-active');
            $(this).slideDown();
        } else {
            $(this).siblings('.search-select').removeClass('-active');
        }
    });
});

$(window).on('load', function () {
    $('.search-select .genre').on('click', function () {
        if (!$(this).hasClass('-active')) {
            $('.search-select .genre').each(function () {
                $(this).removeClass('-active');
            });
            $(this).addClass('-active');
        } else {
            $(this).removeClass('-active');
        }
    });
});

$(window).resize(function () {
    $('.slide-description').css('max-width', $(window).width());
    $('.slide-description').css('margin-left', 0);

    $('#overlay').css('height', ($('html').height() - ($('.header-region').height() + $('.menu-sections').height())));
    $('#overlay').css('margin-top', ($('.header-region').height() + $('.menu-sections').height()));

    if (!$('.cross').hasClass('-active')) {
        $('.side-menu').css('margin-left', -($('.side-menu').width() + 90));
    }
    $('.side-menu').css('margin-top', $('.menu-sections').height());
    // $('.side-menu').css('height', ($(window).height() - $('.header-region').height() - $('.menu-sections').height()));

    if ($(document).width() > 576) {
        $('.side-menu').css('margin-left', -($('.side-menu').width() + 90));
        $('#overlay').css('display', 'none');
        $('.cross').css('display', 'none');
    } else if ($(document).width() <= 576 && $('.cross').hasClass('-active')) {
        $('.side-menu').css('margin-left', 0);
        $('#overlay').css('display', 'block');
        $('.cross').css('display', 'block');
    }
});

$(window).on('load', function () {
    $('.search-select .price-slider').ionRangeSlider({
        skin: 'round',
        type: 'double',
        min: 0,
        max: 100000,
        from: 2000,
        to: 80000,
        hide_min_max: true,
        hide_from_to: true,

        onStart: function (data) {
            $('.search-select.-price .borders.-min').html(data.from);
            $('.search-select.-price .borders.-max').html(data.to);
        },

        onChange: function (data) {
            $('.search-select.-price .borders.-min').html(data.from);
            $('.search-select.-price .borders.-max').html(data.to);
        },
    });
});

$(window).on('load', function () {
    $('.search-select.-date').datepicker({
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        minDate: "",
    });
});


$('.js-btn').on('click', function(e){
    e.preventDefault();
    $('.js-modal, .js-overlay').fadeIn(300);
});

$('.js-close-modal, .js-overlay').on('click', function(e){
    e.preventDefault();
    $('.js-modal, .js-overlay').fadeOut(300);
});