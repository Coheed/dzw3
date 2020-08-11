/**
 * @file
 * Adjusts some elements depending on the header height.
 */

(($, Drupal) => {

  const { behaviors } = Drupal;
  const pageHeader = $('.js-page-header');
  const elements = $('.js-article-header-wrapper, .js-page-featured-wrapper');

  const adjustElementsUnderHeader = () => {
    let pageHeaderHeight = pageHeader.height();
    elements.css({
      'margin-top': -1 * pageHeaderHeight + 'px'
    });
  };

  pageHeader.addClass('header--overlay-style');

  $(window).resize(() => {
    adjustElementsUnderHeader();
  });

  behaviors.emHeaderOverlayStyle = {
    attach(context) {
      adjustElementsUnderHeader();
    }
  }

})(jQuery, Drupal);
