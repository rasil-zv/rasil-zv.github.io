$(window).on('load', function () {
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
});

$(window).resize(function () {
    $('.slide-description').css('max-width', $(window).width());
    $('.slide-description').css('margin-left', 0);
});

$('.load-button').on('click', function() {
    $('.js-icon-dowload').addClass('icon-dowload');
});