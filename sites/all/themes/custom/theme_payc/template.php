<?php

/**
 * @file
 * template.php
 */

/**
 * Page alter.
 */
function theme_payc_page_alter($page) {
/*  if (menu_get_item()['path'] === 'user/%/edit' && count($_GET) > 1) {
    drupal_goto('/user/'.arg(1));
  }*/
  $mobileoptimized = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
    'name' =>  'MobileOptimized',
    'content' =>  'width'
    )
  );
  $handheldfriendly = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
    'name' =>  'HandheldFriendly',
    'content' =>  'true'
    )
  );
  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
    'name' =>  'viewport',
    'content' =>  'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no'
    )
  );
  drupal_add_html_head($mobileoptimized, 'MobileOptimized');
  drupal_add_html_head($handheldfriendly, 'HandheldFriendly');
  drupal_add_html_head($viewport, 'viewport');
}

/**
 * Preprocess variables for html.tpl.php
 */
function theme_payc_preprocess_html(&$vars) {
  if ($node = menu_get_object()) {
    if (isset($node->field_class_css[LANGUAGE_NONE][0]['value'])){
      $node_class = $node->field_class_css[LANGUAGE_NONE][0]['value'];
      if ($node_class){
        $vars['classes_array'][] = $node_class;
      }
    }

    if (isset($node->field_background_desktop[LANGUAGE_NONE][0]['uri'])){
      $node_background_desktop = $node->field_background_desktop[LANGUAGE_NONE][0]['uri'];
      if ($node_background_desktop){
        $vars['background_desktop'] = file_create_url($node_background_desktop);
      }
    }

    if (isset($node->field_background_mobile[LANGUAGE_NONE][0]['uri'])){
      $node_background_mobile = $node->field_background_mobile[LANGUAGE_NONE][0]['uri'];
      if ($node_background_mobile){
        $vars['background_mobile'] = file_create_url($node_background_mobile);
      }
    }

    if (isset($node->field_youtube_video_id[LANGUAGE_NONE][0]['value'])){
      $node_youtube_video_id = $node->field_youtube_video_id[LANGUAGE_NONE][0]['value'];
      if ($node_youtube_video_id){
        $vars['youtube_video_id'] = $node_youtube_video_id;
      }
    }
  }

  /**
   * Add IE8 Support
   */
  drupal_add_css(path_to_theme() . '/css/ie8.css', array('group' => CSS_THEME, 'browsers' => array('IE' => '(lt IE 9)', '!IE' => FALSE), 'preprocess' => FALSE));

}


function  theme_payc_preprocess_page(&$vars) {

}