(function() {
  var FeedController = function($scope,Page, $rootScope, Page) {
      $rootScope.removeactive();
      //$(".cd-stretchy-nav a").removeClass("active");
      $("#feed").addClass ("active");
      //Page.makeActive("feed");
      Page.setTitle('Activity Feed');
      Page.setHeader('Everything, Everyone, Everywhere');
      document.getElementById("header").style.backgroundColor = "#003B69";
      $rootScope.countup('feed');
  };

  angular
    .module('planethero')
    .controller('FeedController', FeedController);
})();
