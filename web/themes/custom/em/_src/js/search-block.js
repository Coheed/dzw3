/**
 * @file
 * Adjusts top elements position depending on header height.
 */

(function($) {
  'use strict';

  var searchToggleButton = $('.js-toggle-search');
  var searchBlockWrapper = $('.js-search-block-wrapper');
  var searchInputField = searchBlockWrapper.find('[type="search"]');

  // Create close button.
  var closeButton = $('<button></button>').html('<i class="fa fa-times"></i>').addClass('close-block-modal');

  // Open modal when header search button is clicked.
  searchToggleButton.on('click', function() {
    searchBlockWrapper.addClass('active').append(closeButton);
    searchInputField.attr('autofocus', '');
  });

  // Close seasrch modal when clicking anywhere on screen
  closeButton.on('click', function() {
    searchBlockWrapper.removeClass('active');
  });

  // Close the modal if Escape key is pressed.
  $(document).on('keyup', function(event) {
    if (event.which === 27) {
      searchBlockWrapper.removeClass('active');
    }
  });
})(jQuery);
