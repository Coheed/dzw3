/**
 * @file
 * Sticky Kit
 *
 * @see http://leafo.net/sticky-kit/
 */
(function ($, Drupal) {
  var behaviors = Drupal.behaviors; // Sticky kit options.

  var options = {};

  var attachStickySidebars = function attachStickySidebars(element, options) {
    var stickyElement = element.find('>div');
    stickyElement.stick_in_parent(options);
  };

  var detachStickySidebars = function detachStickySidebars(element) {
    var stickyElement = element.find('>div');
    stickyElement.trigger('sticky_kit:detach');
  };
  /**
   * Checks for Sticky Kit compatibility. If the sticky element is
   * smaller than its parent container, the library can be applied.
   *
   * @param element
   * @returns {boolean}
   */


  var isStickyCompatible = function isStickyCompatible(element) {
    var parentHeight = element.parent().height();
    var stickyElement = element.find('>div');
    var stickyElementHeight = stickyElement.css('padding-bottom', '1px').height() + 100;
    return stickyElementHeight < parentHeight;
  };

  behaviors.emStickyElements = {
    attach: function attach(context, settings) {
      // If sticky header is enabled.
      if (settings.em.header.stickyHeader === 1) {
        Object.assign(options, {
          offset_top: $('.js-sticky-header-element').outerHeight() + 30
        });
      }

      $(window).once().on('load', function () {
        var largeScreen = window.matchMedia('(min-width: 768px)');
        var stickyColumn = $('.js-sticky-elements'); // Attach StickyKit to each compatible element.

        stickyColumn.each(function (index, element) {
          if (largeScreen.matches && isStickyCompatible($(element))) {
            attachStickySidebars($(element), options);
          }
        }); // Watch for screen changes.

        largeScreen.addListener(function (mql) {
          if (mql.matches) {
            // Attach to each compatible element.
            stickyColumn.each(function (index, element) {
              if (largeScreen.matches && isStickyCompatible($(element))) {
                attachStickySidebars($(element), options);
              }
            });
          } else {
            detachStickySidebars(stickyColumn);
          }
        });
      });
    }
  };
})(jQuery, Drupal);