/**
 * @file
 * Toggle search modal.
 */
(function ($) {
  var searchToggleButton = $('.js-toggle-search');
  var searchBlockWrapper = $('.js-search-block-wrapper');
  var searchInputField = searchBlockWrapper.find('[type="search"]');
  var closeButton = $('<button class="close-block-modal"><i class="fa fa-times"></i></button>');

  var closeSearchModal = function closeSearchModal() {
    searchBlockWrapper.removeClass('active');
  }; // Open search modal.


  searchToggleButton.on('click', function () {
    searchBlockWrapper.addClass('active').append(closeButton);
    searchInputField.attr('autofocus', '');
  }); // Close search modal.

  closeButton.on('click', function () {
    return closeSearchModal();
  }); // Close modal with Escape key.

  $(document).on('keyup', function (event) {
    if (event.which === 27) {
      closeSearchModal();
    }
  });
})(jQuery);