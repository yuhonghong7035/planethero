var app = angular.module("planethero", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/feed', {
        templateUrl: 'feed.html',
        controller: 'feedCtrl'
      }).
      when('/activity/:activityId', {
        templateUrl: 'activity.html',
        controller: 'ActivityCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);