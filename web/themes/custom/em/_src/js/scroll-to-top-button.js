/**
 * @file
 * Scroll to top button.
 */

(function($) {
  'use strict';

  var scrollToTopButton = $('<a href="#top" class="scroll-to-top-button js-smooth-scroll" ' +
    'onclick="return 0"><i class="fas fa-angle-up"></i></a>');

  $('body').append(scrollToTopButton);

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 1200) {
      $(scrollToTopButton).addClass('active');
    }
    else {
      $(scrollToTopButton).removeClass('active');
    }
  });
})(jQuery);
