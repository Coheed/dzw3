<?php

/**
 * Implements hook_preprocess_layout().
 */
function charm_preprocess_layout(&$variables) {

  // Adding wrapper class to layouts.
  $variables['attributes'] = new Drupal\Core\Template\Attribute($variables['attributes']);
  $variables['attributes']->addClass(str_replace('_', '-', $variables['theme_hook_original']));

  // Adding classes to each layout region.
  foreach ($variables['region_attributes'] as $region_key => $region_value) {
    $region_value->addClass('layout-region', 'layout-region--' . str_replace('_', '-', $region_key));
    $region_value->setAttribute('id','region--' . str_replace('_', '-', $region_key) );
  }
}
