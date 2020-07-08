<?php

/**
 * Implements hook_theme_suggestions_PAGE_alter().
 */
function charm_theme_suggestions_page_alter(array &$suggestions, array $variables) {

  $drupal_module_handler = \Drupal::moduleHandler();
  $current_rout_name = \Drupal::service('current_route_match')->getRouteName();


  // --------------------------------
  // Pages node suggestions
  // --------------------------------
  if ($node = \Drupal::request()->attributes->get('node')) {
    if ($node = \Drupal::routeMatch()->getParameter('node')) {

      // Get node revision bundle.
      if($revision = \Drupal::routeMatch()->getRawParameter('node_revision')) {
        $revised_node = \Drupal::entityTypeManager()
          ->getStorage('node')
          ->loadRevision($revision);
        array_splice($suggestions, 1, 0, 'page__node__' . $revised_node->bundle());

      }
      else {

        // Get node bundle.
        $node_bundle = $node->bundle();

        // Get bundle view-modes
        $view_modes = \Drupal::service('entity_display.repository')
          ->getViewModeOptionsByBundle(
            'node', $node_bundle
          );

        // Add suggestions depends on node type.
        array_splice($suggestions, 1, 0, 'page__node__' . $node_bundle);

        // Panelizer suggestions
        if($drupal_module_handler->moduleExists('panelizer')) {
          // Check if the display is panelized
          foreach (array_keys($view_modes) as $view_mode) {
            $is_panelized = \Drupal::service('panelizer')->isPanelized('node', $node_bundle, $view_mode);
            if($is_panelized) {
              array_splice($suggestions, 1, 0, 'page__node__panelized');
              array_splice($suggestions, 3, 0, 'page__node__' . $node_bundle . '__panelized');
            }
          }
        }
      }
    }
  }


  // --------------------------------
  // Preview suggestions
  // --------------------------------
  if ($preview = \Drupal::routeMatch()->getParameter('node_preview')) {
    array_splice($suggestions, 2, 0, 'page__node__preview__' . $preview->getType());
  }


  // --------------------------------------
  // Add suggestions id the page created
  // by the page manager.
  // --------------------------------------
  if ($drupal_module_handler->moduleExists('page_manager')) {
    if(explode('.', $current_rout_name)[0] == 'page_manager') {
      array_splice($suggestions, 1, 0, 'page__page_manager');
    }
  }

  // --------------------------------------
  // Add suggestions for user profile page.
  // --------------------------------------
  if($current_rout_name == 'entity.user.canonical') {
    array_splice($suggestions, 1, 0, 'page__user_profile');
  }


  // --------------------------------------
  // Error page suggestions.
  // Error 404 - Page not found.
  // --------------------------------------
  if($current_rout_name == 'system.404') {
    array_splice($suggestions, 0, 0, 'page__404');
  }

  // --------------------------------------
  // Error page suggestions.
  // Error 403 - Access denied.
  // --------------------------------------
  if($current_rout_name == 'system.403') {
    array_splice($suggestions, 0, 0, 'page__403');
  }
}
