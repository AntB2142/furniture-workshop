$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
});

$('.slider-nav').slick({
	slidesToShow: 7,
	slidesToScroll: 1,
	asNavFor: '.slider',
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
	],
});

$('.autoplay').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},

		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
