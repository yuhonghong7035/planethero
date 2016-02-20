//Define an angular module for our app
var app = angular.module('planethero', []);

 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddActivity', {
        templateUrl: 'templates/add_activity.html',
        controller: 'AddOrderController'
    }).
      when('/ShowActivity', {
        templateUrl: 'templates/timeline.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/ShowActivity'
      });
}]);
 

app.controller('AddOrderController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});
  
app.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});
 

