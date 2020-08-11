<?php

/**
 * Implements template_preprocess_we_megamenu_row
 */
function em_preprocess_we_megamenu_row(&$variables) {
  $variables['attributes']
    ->addClass('row')
    ->addClass('no-gutters');
}

/**
 * Implements template_preprocess_we_megamenu_col
 */
function em_preprocess_we_megamenu_col(&$variables) {
  $col_items = $variables['item_config'];

  if(!isset($col_items->col_config)) {
    $variables['attributes']
      ->addClass('col');
  } else {
    $col_config = $col_items->col_config;
    $variables['attributes']
      ->removeClass('span' . $col_config->width)
      ->addClass('col-' . $col_config->width);
  }
}
