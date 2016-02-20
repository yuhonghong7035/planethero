//Define an angular module for our app
var app = angular.module('planethero', []);

app.factory('utilityFun', function() {
        return {
            makeActive: function(ele) {
                $(".cd-stretchy-nav a").removeClass("active");
                $("#"+ele).addClass("active");
            }
        };
    });

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);


 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addActivity', {
        title: 'Add Activity',
        templateUrl: 'templates/add_activity.html',
        controller: 'AddOrderController'
      }).
      when('/metrics', {
        title: 'Metrics',
        templateUrl: 'templates/metrics.html',
        controller: 'ShowMetrics'
      }).
      when('/feed', {
        title: 'Feeds',
        templateUrl: 'templates/timeline.html',
        controller: 'FeedController'
      }).
      when('/badges', {
        title: 'Badges',
        templateUrl: 'templates/badges.html',
        controller: 'BadgesController'
      }).
      otherwise({
        redirectTo: '/feed'
      });
}]);
 

app.controller('AddOrderController', function($scope,utilityFun) {
     
    $scope.message = 'This is Add new order screen';
    utilityFun.makeActive("add");
     
});
  
app.controller('ShowMetrics', function($scope,utilityFun) {
 
    $scope.message = 'This is Show ShowMetrics screen';
    utilityFun.makeActive("metrics");

    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Basic drilldown'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Animals',
                y: 5,
                drilldown: 'animals'
            }, {
                name: 'Fruits',
                y: 2,
                drilldown: 'fruits'
            }, {
                name: 'Cars',
                y: 4,
                drilldown: 'cars'
            }]
        }],
        drilldown: {
            series: [{
                id: 'animals',
                data: [
                    ['Cats', 4],
                    ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
                ]
            }, {
                id: 'fruits',
                data: [
                    ['Apples', 4],
                    ['Oranges', 2]
                ]
            }, {
                id: 'cars',
                data: [
                    ['Toyota', 4],
                    ['Opel', 2],
                    ['Volkswagen', 2]
                ]
            }]
        }
    });
 
});
 
app.controller('FeedController', function($scope,utilityFun) {
 
    utilityFun.makeActive("feed");
 
});

app.controller('BadgesController', function($scope) {
 
    utilityFun.makeActive("badges");
 
});

