/**
 * @file
 * Sidr - Off-canvas main menu
 *
 * @see http://www.berriart.com/sidr/
 */

(function($, Drupal) {
  'use strict';

  Drupal.behaviors.emSidrOffCanvasNavigation = {
    attach: function(context, settings) {
      // Hide the off-canvas sidebar while page is loading.
      $(context).find('.js-offcanvas-sidebar').once().css('display', 'block');

      /**
       * Create submenu (drop-down menu) for all menu items where
       * the expanded option is enabled.
       */
      $(context).find('.sidr li.menu-item--expanded')
        .once().each(function(index, menuItem) {
          $(menuItem).find('> a').on('click', function(event) {
            event.preventDefault();
            $(menuItem).toggleClass('active');
            $(menuItem).find('> ul.menu').toggleClass('open');
          });
        });

      /**
       * Initialize Sider
       */
      $(context).find('.js-toggle-sidebar').once().sidr({
        name: 'offcanvas-sidebar',
        side: 'right',
        renaming: false,
        displace: true,
        onOpen: onOpen,
        onOpenEnd: onOpenEnd,
        onClose: onClose
      });
    }
  };


  function onOpen() {
    $('.offcanvas-sidebar-overlay').addClass('active');
  }

  function onOpenEnd() {
    $('.offcanvas-sidebar-overlay').on('click', function() {
      $(this).removeClass('active');
      $.sidr('close', 'offcanvas-sidebar');
    });
  }

  function onClose() {
    $('.offcanvas-sidebar-overlay').removeClass('active');
  }


  // Close off-canvas sidebar with pressing the Escape key.
  $(document).on('keyup', function(event) {
    if (event.which === 27) {
      $.sidr('close', 'offcanvas-sidebar');
    }
  });

  // Close off-canvas sidebar on resize
  $(window).resize(function() {
    $.sidr('close', 'offcanvas-sidebar');
  });
})(jQuery, Drupal);
