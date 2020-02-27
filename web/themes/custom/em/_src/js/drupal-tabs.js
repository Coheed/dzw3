/**
 * @file
 * Navigation tabs
 */
(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.emTabs = {
    attach: function(context, settings) {
      var tabs = $(context).find('.tabs');
      var tabsToggleButtomn = $(context).find('.js-tabs-toggler');

      // Set .cart-block--contents top position according header height.
      if (tabs.length) {
        tabsToggleButtomn.once().on('click', function() {
          tabs.toggleClass('active');
        });
      }
    }
  };
})(jQuery, Drupal);
