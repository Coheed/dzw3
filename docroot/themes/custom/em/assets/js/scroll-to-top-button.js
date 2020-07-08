/**
 * @file
 * Scroll to top button.
 */
(function ($) {
  var scrollToTopButton = $('<a href="#top" class="scroll-to-top-button js-smooth-scroll" ' + 'onclick="return 0"><i class="fas fa-angle-up"></i></a>'); // Append button to <body>

  $('body').append(scrollToTopButton);
  $(window).scroll(function () {
    $(window).scrollTop() >= 1200 ? $(scrollToTopButton).addClass('active') : $(scrollToTopButton).removeClass('active');
  });
})(jQuery);