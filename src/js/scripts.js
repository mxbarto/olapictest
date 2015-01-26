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


