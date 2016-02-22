jQuery(document).ready(function(){
  var stretchyNav = $('.cd-stretchy-nav');

  stretchyNav.on('click', function(event) {
    stretchyNav.css('height', stretchyNav.hasClass('nav-is-visible') ? 'initial' : '60px');

    // if "li" element is clicked.
    if (listElement = $(event.target).parents("li")[0]) {
      stretchyNav.css('height', '60px');
    }
  });

  // set default height as 60px
  stretchyNav.css('height', '60px');
});
