var _this = this;

/**
 * @file
 * Sidr - Off-canvas main menu
 *
 * @see http://www.berriart.com/sidr/
 */
(function ($, Drupal) {
  var behaviors = Drupal.behaviors;
  var overlay = $('.offcanvas-sidebar-overlay'); // Callbacks for Sidr plugin.

  var onClose = function onClose() {
    return overlay.removeClass('active');
  };

  var onOpen = function onOpen() {
    return overlay.addClass('active');
  };

  var onOpenEnd = function onOpenEnd() {
    overlay.on('click', function () {
      $(_this).removeClass('active');
      $.sidr('close', 'offcanvas-sidebar');
    });
  }; // Sider plugin options.


  var options = {
    name: 'offcanvas-sidebar',
    side: 'right',
    renaming: false,
    displace: true,
    onOpen: onOpen,
    onOpenEnd: onOpenEnd,
    onClose: onClose
  };
  behaviors.emSidrOffCanvasNavigation = {
    attach: function attach(context) {
      $('.js-offcanvas-sidebar', context).once().css('display', 'block'); // Display child items as submenu if the expanded option
      // is enabled under the menu configuration.

      $('.sidr li.menu-item--expanded', context).once().each(function (index, menuItem) {
        $(menuItem).find('> a').on('click', function (event) {
          event.preventDefault();
          $(menuItem).toggleClass('active');
          $(menuItem).find('> ul.menu').toggleClass('open');
        });
      }); // Initialize thr Sider

      $(context).find('.js-toggle-sidebar').once().sidr(options);
    }
  }; // Close off-canvas sidebar with pressing the Escape key.

  $(document).on('keyup', function (event) {
    if (event.which === 27) {
      $.sidr('close', 'offcanvas-sidebar');
    }
  }); // Close off-canvas sidebar on resize

  $(window).resize(function () {
    $.sidr('close', 'offcanvas-sidebar');
  });
})(jQuery, Drupal);