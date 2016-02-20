/* count js */


var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
var users_countup = new CountUp("users_countup", 0, 1200, 0, 1, options);
var activities_countup = new CountUp("activities_countup", 0, 2000, 0, 1, options);
var countries_countup = new CountUp("countries_countup", 0, 48, 0, 1, options);
users_countup.start();
activities_countup.start();
countries_countup.start();

/* Nav button */

jQuery(document).ready(function(){
  if( $('.cd-stretchy-nav').length > 0 ) {
    var stretchyNavs = $('.cd-stretchy-nav');
    
    stretchyNavs.each(function(){
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
      
      stretchyNavTrigger.on('click', function(event){
        event.preventDefault();
        stretchyNav.toggleClass('nav-is-visible');
      });
    });

    $(document).on('click', function(event){
      ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
    });
  }
});