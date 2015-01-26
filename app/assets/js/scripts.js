/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.3
 * Copyright 2015. MIT licensed.
 */
  'use strict';

  $(document).ready(function() {

    $('.item_wall').css('position', 'absolute');

    //masonry instance
    var $container = $('#olapic-wall');

    $container.masonry({
      columnWidth: 200,
      itemSelector: '.item_wall'
    });
  });


