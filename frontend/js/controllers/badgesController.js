(function() {
  var BadgesController = function($scope, $rootScope, Page) {
      $rootScope.removeactive();
      $("#badges").addClass ("active");
      //Page.makeActive("badges");
      Page.setTitle('Badges');
      Page.setHeader('Your Collection of Badges');
      document.getElementById("header").style.backgroundColor = "rgb(0, 105, 86)";
      $rootScope.countup('badges');
  };

  angular
    .module('planethero')
    .controller('BadgesController', BadgesController);
})();
