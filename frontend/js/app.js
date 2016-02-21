
//
//Define an angular module for our app
//

(function() {
  var app = angular.module('planethero', ["ngRoute", "ngMaterial", 'ngMdIcons', 'ngSanitize', "materialCalendar"]);

  app.run(function($rootScope) {
    $rootScope.url='http://private-6558c-planetheroapi.apiary-mock.com/';
    $rootScope.headerstyle = 'background-color: #003B69';

    $rootScope.removeactive = function() {
        $('.cd-stretchy-nav ul li a').each (function(){$(this).removeClass('active');});
    }

    $rootScope.countup = function(page){
        $('.header_counts').each (function(){$(this).addClass('hidden');});
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
      var badges_countup = new CountUp("badges_countup", 0, 2, 0, 0.5, options);
      var upcomingactivities_countup = new CountUp("upcomingactivities_countup", 0, 2, 0, 0.5, options);
      var useractivities_countup = new CountUp("useractivities_countup", 0, 5, 0, 0.5, options);

      if (page == 'tasks' || page == 'feed' || page == 'metrics'){
          $('.header_counts').eq(0).removeClass('hidden');
          users_countup.start();
      }
      if (page == 'tasks' || page == 'feed' || page == 'metrics'){
          $('.header_counts').eq(1).removeClass('hidden');
          activities_countup.start();
      }
      if (page == 'tasks' || page == 'feed' || page == 'metrics'){
          $('.header_counts').eq(2).removeClass('hidden');
          countries_countup.start();
      }
      if (page == 'badges'){
          $('.header_counts').eq(3).removeClass('hidden');
          badges_countup.start();
      }
      if (page == 'calendar'){
          $('.header_counts').eq(4).removeClass('hidden');
          upcomingactivities_countup.start();
      }
      if (page == 'calendar'){
          $('.header_counts').eq(5).removeClass('hidden');
          useractivities_countup.start();
      }
    }
  });

  //Define Routing for app
  //Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
  //Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/tasks', {
          templateUrl: 'templates/tasks.html',
          controller: 'TasksController'
        }).
        when('/metrics', {
          templateUrl: 'templates/metrics.html',
          controller: 'metricsController'
        }).
        when('/feed', {
          templateUrl: 'templates/timeline.html',
          controller: 'FeedController'
        }).
        when('/badges', {
          templateUrl: 'templates/badges.html',
          controller: 'BadgesController'
        }).
        when('/calendar', {
          templateUrl: 'templates/calendar.html',
          controller: 'calendarController'
        }).
        when('/profile', {
          templateUrl: 'templates/profile.html',
          controller: 'profileController'
        }).
        when('/enter', {
          templateUrl: 'templates/enter.html',
          controller: 'enteranceController'
        }).
        otherwise({
          redirectTo: '/feed'
        });
  }]);
})();
