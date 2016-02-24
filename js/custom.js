$(document).ready(function() {
	var height = $(window).height();
	$(window).scroll(function(e) {
		var currentWindow = $(this).scrollTop();
		if (currentWindow >= height) {
			$('.navbar').addClass('small');
		} else if (currentWindow < height) {
			$('.navbar').removeClass('small ');
		}
	});

	var porto = $('.portfolio-item').isotope({
	  // options
	  itemSelector: '.single-item',
	  layoutMode: 'fitRows'
	});

	$('.portfolio-filter a').on( 'click', function(e) {
		e.preventDefault();
		$('.portfolio-filter a').removeClass('active');
		$(this).addClass('active');

	  	var filterValue = $(this).attr('data-filter');
	 	porto.isotope({ filter: filterValue });
	});

	$('.foo').slideme ({
		arrows:false,
		css:true,
		autoslide:true,
		interval:350,
		loop:true
	});

});