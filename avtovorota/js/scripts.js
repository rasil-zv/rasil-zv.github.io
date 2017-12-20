$(function(){

	/* CounterUp.js */ 

	$('.js-counter-100').counterUp({
		time: 1000
	});

	$('.js-counter-200').counterUp({
		time: 1500
	});

	$('.js-counter-300').counterUp({
		time: 2000
	});


	/* Slick.js */ 

	$('#what-slider').slick({
	  slidesToShow: 5,
	  responsive: [
	      {
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 4,
	          slidesToScroll: 1,
	          dots: false,
	          arrows: true,
	          infinite: false
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          infinite: false
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	          infinite: false
	        }
	      }
	    ]
	});


	// Wow.js

	var wow = new WOW({
		offset: 110
	});
	wow.init();


	/* MaskedInput.js */

	$("input[type=tel]").mask("+7 (999) 999-9999");


	/* Modals */ 

	$('.js-show-modal').on('click', function(e){
		e.preventDefault();
		$('.js-modal-form, .overlay').fadeIn(500);
		$('body').addClass('open-modal');
	});

	$('.js-modal-close').on('click', function(e){
		e.preventDefault();
		$('.overlay, .js-modal-form, .js-modal-thanks').fadeOut('slow');
		$('body').removeClass('open-modal');
	});


	/* Typed.js */ 

	$(".js-typed").typed({
        strings: ["Начни получать <span>150 тыс.руб./мес</span> на продаже <br>Автоматических ворот уже сейчас!"],
        startDelay: 1000,
        typeSpeed: 0
    });


});