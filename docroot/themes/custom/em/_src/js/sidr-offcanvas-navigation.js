/**
 * @file
 * Sidr - Off-canvas main menu
 *
 * @see http://www.berriart.com/sidr/
 */

(($, Drupal) => {
  const { behaviors } = Drupal;
  const overlay = $('.offcanvas-sidebar-overlay');

  // Callbacks for Sidr plugin.
  const onClose = () => overlay.removeClass('active');
  const onOpen = () => overlay.addClass('active');
  const onOpenEnd = () => {
    overlay.on('click', () => {
      $(this).removeClass('active');
      $.sidr('close', 'offcanvas-sidebar');
    });
  };

  // Sider plugin options.
  const options = {
    name: 'offcanvas-sidebar',
    side: 'right',
    renaming: false,
    displace: true,
    onOpen: onOpen,
    onOpenEnd: onOpenEnd,
    onClose: onClose
  };

  behaviors.emSidrOffCanvasNavigation = {
    attach(context) {

      $('.js-offcanvas-sidebar', context).once().css('display', 'block');

      // Display child items as submenu if the expanded option
      // is enabled under the menu configuration.
      $('.sidr li.menu-item--expanded', context)
        .once().each((index, menuItem) => {
        $(menuItem).find('> a').on('click', (event) => {
          event.preventDefault();
          $(menuItem).toggleClass('active');
          $(menuItem).find('> ul.menu').toggleClass('open');
        });
      });

      // Initialize thr Sider
      $(context).find('.js-toggle-sidebar').once().sidr(options);
    }
  };

  // Close off-canvas sidebar with pressing the Escape key.
  $(document).on('keyup', (event) => {
    if (event.which === 27) {
      $.sidr('close', 'offcanvas-sidebar');
    }
  });

  // Close off-canvas sidebar on resize
  $(window).resize(() => {
    $.sidr('close', 'offcanvas-sidebar');
  });

})(jQuery, Drupal);
