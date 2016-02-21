(function() {
  var indexController = function($scope, Page) {
    $scope.Page = Page;
  };

  angular
    .module("planethero")
    .controller("indexController", indexController);

})();
