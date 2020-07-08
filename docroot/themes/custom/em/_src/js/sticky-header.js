/**
 * @file
 * Sticky Header
 */

(function($) {
  'use strict';

  const wrapper = $('.js-page-header');
  const stickyElement = wrapper.find('.js-sticky-header-element');
  const stickyElementHeight = stickyElement.offset().top;

  $(window).on( 'load scroll', function(evt) {
    const adminToolbar = $('#toolbar-bar');
    const parentWrapper = $('<div></div>').css('height', stickyElement.outerHeight());

    // Wrap the sticky element with a placeholder element.
    stickyElement.once().wrap(parentWrapper);

    if($(this).scrollTop() >= stickyElementHeight) {
      stickyElement.addClass('header-stuck');
      if(adminToolbar.length !== 0) {
        stickyElement.css('top', adminToolbar.outerHeight());
      }
    }
    else {
      stickyElement.removeClass('header-stuck');
    }
  });

}(jQuery));
