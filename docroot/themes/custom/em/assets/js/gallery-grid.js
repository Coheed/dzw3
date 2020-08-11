/**
 * @file
 * Gallery Grid
 */
(function ($, Drupal) {
  var behaviors = Drupal.behaviors;
  behaviors.emGalleryGrid = {
    attach: function attach(context) {
      var galleryGrid = $('.view-mode-gallery-grid', context);
      var masonryGrid = galleryGrid.masonry({
        itemSelector: 'figure',
        percentPosition: true
      }); // Create masonry layout after images are loaded.

      masonryGrid.imagesLoaded().progress(function () {
        masonryGrid.masonry('layout');
      }).on('layoutComplete', function (event, laidOutItems) {
        galleryGrid.addClass('masonry-loaded');
      }).once().photoSwipe();
    }
  };
})(jQuery, Drupal);