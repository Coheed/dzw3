<?php

/**
 * Implements hook_page_attachments_alter().
 */
function em_page_attachments_alter(array &$variables) {

  $variables['#attached']['drupalSettings']['em'] = array();

  /*
   * Attach Sticky Header library
   */
  if(theme_get_setting('pd_sticky_header')) {
    $variables['#attached']['library'][] = 'em/sticky-header';
  }

  /*
   * Attach Scroll to Top library
   */
  if(theme_get_setting('pd_scroll_to_top')) {
    $variables['#attached']['library'][] = 'em/scroll-to-top-button';
  }

  /*
   * Attach Sticky-Kit library
   */
  if(theme_get_setting('pd_sticky_sidebars')) {
    $variables['#attached']['library'][] = 'em/sticky-sidebars';
  }

  /*
   * Make some variables available in drupalSettings
   */
  $variables['#attached']['drupalSettings']['em']['header']['stickyHeader']
    = theme_get_setting('pd_sticky_header');

}
