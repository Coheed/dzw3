/**
 * @file
 * Sticky Header
 */
(function ($) {
  'use strict';

  var wrapper = $('.js-page-header');
  var stickyElement = wrapper.find('.js-sticky-header-element');
  var stickyElementHeight = stickyElement.offset().top;
  $(window).on('load scroll', function (evt) {
    var adminToolbar = $('#toolbar-bar');
    var parentWrapper = $('<div></div>').css('height', stickyElement.outerHeight()); // Wrap the sticky element with a placeholder element.

    stickyElement.once().wrap(parentWrapper);

    if ($(this).scrollTop() >= stickyElementHeight) {
      stickyElement.addClass('header-stuck');

      if (adminToolbar.length !== 0) {
        stickyElement.css('top', adminToolbar.outerHeight());
      }
    } else {
      stickyElement.removeClass('header-stuck');
    }
  });
})(jQuery);