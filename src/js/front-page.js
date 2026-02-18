$(document).ready(function () {
	'use strict';

	// Tabs -------------------------------------------
	$('.education__tab-list a').click(function () {
		// Check for active
		$('.education__tab-list li').removeClass('active');
		$(this).parent().addClass('active');
		// Display active tab
		let currentTab = $(this).attr('href');
		$('.education__tab-container .education__tab-item').hide();
		$(currentTab).show();
		return false;
	});

	// Sliders -------------------------------------------
	$('.header-carousel').owlCarousel({
		autoplay: false,
		smartSpeed: 1500,
		animateOut: 'fadeOut',
		mouseDrag: false,
		touchDrag: false,
		loop: false,
		nav: false,
		dots: true,
		items: 1,
		dotsData: true,
	});
	$('.owl-dot').click(function() {
        $('.header-carousel').trigger('to.owl.carousel', [$(this).index(), 1000]);
    })

	$('.smart__slider').owlCarousel({
		nav: false,
		dots: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		loop: false,
		items: 1,
		responsive: {
			550: {
				items: 3,
			},
			990: {
				items: 4,
			},
			1080: {
				items: 5,
			},
		}
	});

	$('.blog__slider').owlCarousel({
		nav: false,
		dots: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		loop: false,
		items: 1,
		responsive: {
			550: {
				items: 2,
			},
			990: {
				items: 3,
			},
			1080: {
				items: 4,
			},
		}
	});

	$('.feedback__slider').owlCarousel({
		nav: false,
		dots: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		loop: true,
		items: 1,
		responsive: {
			550: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1080: {
				items: 2,
			},
		}
	});
	// Go to the next item
	$('#testimonialsRight').click(function () {
		$('.feedback__slider').trigger('next.owl.carousel');
	});
	// Go to the previous item
	$('#testimonialsLeft').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		$('.feedback__slider').trigger('prev.owl.carousel', [300]);
	});

});