/**
 * @file
 * Toggle search modal.
 */

(($) => {

  const searchToggleButton = $('.js-toggle-search');
  const searchBlockWrapper = $('.js-search-block-wrapper');
  const searchInputField = searchBlockWrapper.find('[type="search"]');
  const closeButton = $('<button class="close-block-modal"><i class="fa fa-times"></i></button>');
  const closeSearchModal = () => {
    searchBlockWrapper.removeClass('active');
  };

  // Open search modal.
  searchToggleButton.on('click', () => {
    searchBlockWrapper.addClass('active').append(closeButton);
    searchInputField.attr('autofocus', '');
  });

  // Close search modal.
  closeButton.on('click', () => closeSearchModal());

  // Close modal with Escape key.
  $(document).on('keyup', (event) => {
    if (event.which === 27) {
      closeSearchModal()
    }
  });

})(jQuery);
