jQuery(document).ready(function ($) {
	"use strict";

	/* Page loading animation */
	$(window).on('load', function () {
		var $preloader = $('#page-preloader'),
			$spinner = $preloader.find('.spinner');
		$spinner.fadeOut();
		$preloader.delay(600).fadeOut('slow');
	});
	// Animation
  $("span.see").click(function () {
		  $('div.map-info').addClass('bounceOutLeft').removeClass('bounceInLeft');
		  $('span.showcont').addClass('bounceInLeft').removeAttr('id', 'dnone').attr('id', 'sbtn');
	  });
	  $("span.showcont").click(function () {
		  $('div.map-info').removeClass('bounceOutLeft').addClass('bounceInLeft');
		  $('span.showcont').removeClass('bounceInLeft').removeAttr('id', 'sbtn').attr('id', 'dnone');
	  });
	  $("span.hiddesc").click(function () {
		  $('div.cta1desc').addClass('bounceOutLeft').removeClass('bounceInLeft');
		  $('div.requestform').addClass('bounceInLeft').removeClass('bounceOutLeft');
	  });
	  $("span.hiderform").click(function () {
		  $('div.cta1desc').addClass('bounceInLeft').removeClass('bounceOutLeft');
		  $('div.requestform').addClass('bounceOutLeft').removeClass('bounceInLeft');
	  });
	  $("a.showsearchline").click(function () {
		  $('form.search').addClass('act animated slideInDown').removeClass('slideOutUp');
	  });
        $("i.sstb").click(function () {
            $('form.search').addClass('act animated slideInDown').removeClass('slideOutUp');
        });
	  $("a.hidesearchline").click(function () {
		  $('form.search').addClass('slideOutUp').removeClass('act animated slideInDown');
	  });
		// Scroll
		$(document).ready(function(){   
			$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
					$('#scroller').fadeIn();
				} else {
					$('#scroller').fadeOut();
				}
			});
			$('#scroller').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 400);
				return false;
			});
		});
});
