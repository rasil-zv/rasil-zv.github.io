$(function(){

	// Wow.js

	var wow = new WOW({
		offset: 80,
		mobile: false
	});
	wow.init();

	/* Modals */ 

	$('.js-show-modal').on('click', function(e){

		e.preventDefault();
		$('.overlay').fadeIn();
		$('.modals').addClass('modals_active');
		$('body').addClass('open-modal');
	});

	$('.modals-close, .overlay').on('click', function(){

		$('.overlay').fadeOut('fast');
		$('.modals').removeClass('modals_active');
		$('body').removeClass('open-modal');

	});

	$('.js-close-modal').on('click', function(){

		$('#js-modal-thanks').fadeOut('slow');
		$('#js-modal-order').removeAttr('style');
		$('#js-modal-order').removeClass('modals_active');
		$('.overlay').fadeOut('fast');
		$('body').removeClass('open-modal');
	});


	/* Slick.js */ 

	$('#js-feedback-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true
	});

	/* MaskedInput.js */

	$("input[type=tel]").mask("+7 (999) 999-9999");


});