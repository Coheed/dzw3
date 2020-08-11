/**
 * @file
 * Sticky Kit
 *
 * @see http://leafo.net/sticky-kit/
 */

(($, Drupal) => {
  const { behaviors } = Drupal;

  // Sticky kit options.
  const options = {};

  const attachStickySidebars = (element, options) => {
    let stickyElement = element.find('>div');
    stickyElement.stick_in_parent(options);
  };

  const detachStickySidebars = (element) => {
    let stickyElement = element.find('>div');
    stickyElement.trigger('sticky_kit:detach');
  };

  /**
   * Checks for Sticky Kit compatibility. If the sticky element is
   * smaller than its parent container, the library can be applied.
   *
   * @param element
   * @returns {boolean}
   */
  const isStickyCompatible = (element) => {
    let parentHeight = element.parent().height();
    let stickyElement = element.find('>div');
    let stickyElementHeight = stickyElement.css('padding-bottom', '1px').height() + 100;

    return stickyElementHeight < parentHeight;
  };

  behaviors.emStickyElements = {
    attach(context, settings) {

      // If sticky header is enabled.
      if (settings.em.header.stickyHeader === 1) {
        Object.assign(options, {
          offset_top: $('.js-sticky-header-element').outerHeight() + 30
        })
      }

      $(window).once().on('load', () => {
        let largeScreen = window.matchMedia('(min-width: 768px)');
        let stickyColumn = $('.js-sticky-elements');

        // Attach StickyKit to each compatible element.
        stickyColumn.each((index, element) => {
          if (largeScreen.matches && isStickyCompatible($(element))) {
            attachStickySidebars($(element), options);
          }
        });

        // Watch for screen changes.
        largeScreen.addListener(function(mql) {
          if (mql.matches) {
            // Attach to each compatible element.
            stickyColumn.each((index, element) => {
              if (largeScreen.matches && isStickyCompatible($(element))) {
                attachStickySidebars($(element), options);
              }
            });
          }
          else {
            detachStickySidebars(stickyColumn);
          }
        });
      });
    }
  }

})(jQuery, Drupal);
