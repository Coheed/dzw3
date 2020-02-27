/**
 * @file
 * Gallery Grid
 */
(function($, Drupal) {
  'use strict';

  Drupal.behaviors.emGalleryGrid = {
    attach: function(context, settings) {
      var galleryGrid = $(context).find('.view-mode-gallery-grid');


      var masonryGrid = galleryGrid.masonry({
        itemSelector: 'figure',
        percentPosition: true,
      });

      // layout Masonry after each image loads
      masonryGrid.imagesLoaded().progress(function() {
        masonryGrid.masonry('layout');
      });

      masonryGrid.on('layoutComplete', function(event, laidOutItems) {
        galleryGrid.addClass('masonry-loaded');
      });

      galleryGrid.once().photoSwipe();
    }
  };
})(jQuery, Drupal);
