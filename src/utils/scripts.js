/*
Author       : Syed Ekram.
Template Name: Monalisa - Health & Beauti HTML Template
Version      : 1.0
*/
/* global jQuery, WOW */

export default function validation() {
(function($) {

  jQuery(document).ready(function () {

    /* =========================
       NAVBAR / COLLAPSE BEHAVIOR
       ========================= */
    var $win = $(window);
    var $nav = $('.navbar-default');
    var $collapse = $('.navbar-collapse');   

  
    function handleShrink() {
      if ($win.scrollTop() > 100) {
        $nav.addClass('menu-shrink');
      } else {
        $nav.removeClass('menu-shrink');
      }
    }
    handleShrink();    
    $win.on('scroll', handleShrink);

 
    $collapse.on('shown.bs.collapse', function () {
      $nav.addClass('is-open');
      $('body').addClass('nav-open');
    });
    $collapse.on('hidden.bs.collapse', function () {
      $nav.removeClass('is-open');
      $('body').removeClass('nav-open');
    });

    $collapse.on('click', 'a:not(.dropdown-toggle)', function () {
      $collapse.collapse('hide');
    });

    $('a.page-scroll[href^="#"]').on('click', function (e) {
      var $t = $($(this).attr('href'));
      if ($t.length) {
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: $t.offset().top - 50
        }, 700);
        $collapse.collapse('hide');
      }
    });

    /* =========== GALLERY / LIGHTBOX =========== */
    $("a[class^='prettyPhoto']").prettyPhoto();

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
    function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.on("click", function () {
        var theModal = $(this).data("target"),
            videoSRC = $('#video-modal iframe').attr('src'),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close, .modal').on("click", function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      });
    }
    autoPlayYouTubeModal();

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
