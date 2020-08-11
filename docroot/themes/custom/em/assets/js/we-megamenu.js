/**
 * Inserts an icon in the menu item, depending on the CSS
 * class that is used under WE Mega Menu UI.
 */
(function ($, Drupal) {
  var behaviors = Drupal.behaviors;
  behaviors.emWeMegaMenu = {
    attach: function attach(context) {
      $(context).find(".we-mega-menu-li").each(function (key, value) {
        var menuItem = $(value);
        var icon = menuItem.data('icon');
        var menuItemLink = menuItem.find('> span') || menuItem.find('> a');

        if (icon) {
          $('<i class="' + icon + '"></i>').prependTo(menuItemLink);
        }
      });
    }
  };
})(jQuery, Drupal);