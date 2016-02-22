(function() {
  var addTaskController = function($scope, $rootScope, $http, Page) {
    $scope.fields = {}
  };

  angular
    .module("planethero")
    .controller("addTaskController", addTaskController);
})();
