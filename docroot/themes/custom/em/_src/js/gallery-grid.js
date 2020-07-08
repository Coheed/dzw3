/**
 * @file
 * Gallery Grid
 */

(($, Drupal) => {
  const { behaviors } = Drupal;

  behaviors.emGalleryGrid = {
    attach(context) {

      const galleryGrid = $('.view-mode-gallery-grid', context);
      const masonryGrid = galleryGrid.masonry({
        itemSelector: 'figure',
        percentPosition: true,
      });

      // Create masonry layout after images are loaded.
      masonryGrid.imagesLoaded().progress(() => {
        masonryGrid.masonry('layout');
      }).on('layoutComplete', (event, laidOutItems) => {
        galleryGrid.addClass('masonry-loaded');
      }).once().photoSwipe();
    }
  }

})(jQuery, Drupal);
