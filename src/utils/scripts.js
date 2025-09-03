/*
Author       : Syed Ekram.
Template Name: Monalisa - Health & Beauti HTML Template
Version      : 1.0
*/
/* global jQuery, WOW */

export default function validation() {
(function($) {

  jQuery(document).ready(function () {
   
   
 /*START MENU JS*/
				$('a.page-scroll').on('click', function(e){
					var anchor = $(this);
					$('html, body').stop().animate({
						scrollTop: $(anchor.attr('href')).offset().top - 50
					}, 1500);
					e.preventDefault();
				});		

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

    /* =========== GALLERY / LIGHTBOX =========== */
   if ($.fn.prettyPhoto) {
  $("a[class^='prettyPhoto']").prettyPhoto();
}

    /* =========== TESTIMONIAL (flexslider) =========== */
    $(window).on('load', function () {
      $('.testi-slider').flexslider({
        animation: "slide",
        direction: "fade",
        prevText: "<i class='fa fa-long-arrow-left'></i>",
        nextText: "<i class='fa fa-long-arrow-right'></i>"
      });
    });

    /* =========== VIDEO MODAL AUTOPLAY =========== */
    /*START VIDEO JS*/
		 function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.on("click",function() {
			  var theModal = $(this).data("target"),
				videoSRC = $('#video-modal iframe').attr('src'),
				videoSRCauto = videoSRC + "?autoplay=1";
			  $(theModal + ' iframe').attr('src', videoSRCauto);
			  $(theModal + ' button.close').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			  $('.modal').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			});
		  }
		  autoPlayYouTubeModal();
		/*END VIDEO JS*/

    /* =========== PARTNER LOGO (owl) =========== */
    $('.partner').owlCarousel({
      autoPlay: 3000,
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]
    });

    /* =========== BOOTSTRAP CAROUSEL =========== */
    $('.carousel').carousel({
      interval: 5000,
      pause: 'false'
    });

  }); // end document.ready

  /* =========== WOW ANIMATION =========== */
  new WOW().init();

})(jQuery);
}
