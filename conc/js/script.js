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
    $('.side-menu').css('height', ($(window).height() - $('.header-region').height() - $('.menu-sections').height()));
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

$(window).resize(function () {
    $('.slide-description').css('max-width', $(window).width());
    $('.slide-description').css('margin-left', 0);

    $('#overlay').css('height', ($('html').height() - ($('.header-region').height() + $('.menu-sections').height())));
    $('#overlay').css('margin-top', ($('.header-region').height() + $('.menu-sections').height()));

    if (!$('.cross').hasClass('-active')) {
        $('.side-menu').css('margin-left', -($('.side-menu').width() + 90));
    }
    $('.side-menu').css('margin-top', $('.menu-sections').height());
    $('.side-menu').css('height', ($(window).height() - $('.header-region').height() - $('.menu-sections').height()));

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
