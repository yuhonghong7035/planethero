(function() {
  var TasksController = function($scope,Page, $rootScope, $http, Page) {
      $rootScope.removeactive();
      $("#tasks").addClass ("active");
      //Page.makeActive("add");
      Page.setTitle('Tasks');
      Page.setHeader('Everything, for the planet');
      document.getElementById("header").style.backgroundColor = "rgb(61, 103, 74)";
      $rootScope.countup('tasks');

      $scope.tasks = {};
      $http({
        method: 'GET',
        url: $rootScope.url+'tasks'
      }).then(function successCallback(response) {
          console.log (response);
          $scope.tasks = response.data;
      }, function errorCallback(response) {
          console.log (response);
      });
  };

  angular
    .module("planethero")
    .controller("TasksController", TasksController);
})();
