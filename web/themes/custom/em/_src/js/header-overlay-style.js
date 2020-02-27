/**
 * @file
 * Adjusts top elements position depending on header height.
 */

(function($) {
  'use strict';

  // Select page header
  var pageHeader = $('.js-page-header');
  pageHeader.addClass('header--overlay-style');
  // Select the elements which should appear under the header
  var elements = $('.js-article-header-wrapper, .js-page-featured-wrapper');

  // Adjusts element/s depending on header height
  function adjustContent(element) {
    var pageHeaderHeight = pageHeader.height();
    element.css({
      'margin-top': -1 * pageHeaderHeight + 'px'
    });
  }

  // Adjust articles where the header overlay style is used.
  $(window).resize(function() {
    adjustContent(elements);
  });

  Drupal.behaviors.emHeaderOverlayStyle = {
    attach: function(context, settings) {
      adjustContent(elements);
    }
  };

})(jQuery);
