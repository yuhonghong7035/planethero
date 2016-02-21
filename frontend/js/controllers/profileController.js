(function() {
  var profileController = function($scope, $rootScope, Page) {
      $rootScope.removeactive();
      $("#profile").addClass ("active");
  };

  angular
    .module("planethero")
    .controller("ProfileController", profileController);
})();
