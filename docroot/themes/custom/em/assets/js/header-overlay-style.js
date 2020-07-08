/**
 * @file
 * Adjusts some elements depending on the header height.
 */
(function ($, Drupal) {
  var behaviors = Drupal.behaviors;
  var pageHeader = $('.js-page-header');
  var elements = $('.js-article-header-wrapper, .js-page-featured-wrapper');

  var adjustElementsUnderHeader = function adjustElementsUnderHeader() {
    var pageHeaderHeight = pageHeader.height();
    elements.css({
      'margin-top': -1 * pageHeaderHeight + 'px'
    });
  };

  pageHeader.addClass('header--overlay-style');
  $(window).resize(function () {
    adjustElementsUnderHeader();
  });
  behaviors.emHeaderOverlayStyle = {
    attach: function attach(context) {
      adjustElementsUnderHeader();
    }
  };
})(jQuery, Drupal);