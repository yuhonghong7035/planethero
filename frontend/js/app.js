//Define an angular module for our app
var app = angular.module('planethero', ["ngRoute"]);

app.factory('utilityFun', function() {
  return {
    makeActive: function(ele) {
      $('.cd-stretchy-nav ul li a').each (function(){$(this).removeClass('active');});
      $("#"+ele).addClass("active");
    }
  };
});


app.run(function($rootScope) {
    $rootScope.removeactive = function() {
        $('.cd-stretchy-nav ul li a').each (function(){$(this).removeClass('active');});
    }
});

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addActivity', {
        templateUrl: 'templates/add_activity.html',
        controller: 'AddActivityController'
      }).
      when('/metrics', {
        templateUrl: 'templates/metrics.html',
        controller: 'ShowMetrics'
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

app.controller('entranceController', function($scope) {

});

app.controller('calendarController', function($scope) {

});

app.controller('profileController', function($scope) {

});

app.controller('AddActivityController', function($scope,utilityFun, $rootScope) {
    $rootScope.removeactive();
    $("#add").addClass ("active");
    //utilityFun.makeActive("add");

});

app.controller('ShowMetrics', function($scope,utilityFun, $rootScope) {
    $scope.message = 'This is Show ShowMetrics screen';
    $rootScope.removeactive();
    $("#metrics").addClass ("active");
    //utilityFun.makeActive("metrics");

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

    var data = Highcharts.geojson(Highcharts.maps['countries/us/us-all']),
        // Some responsiveness
        small = $('#container1').width() < 400;

    // Set drilldown pointers
    $.each(data, function (i) {
        this.drilldown = this.properties['hc-key'];
        this.value = i; // Non-random bogus data
    });

    // Instanciate the map
    $('#container1').highcharts('Map', {
        chart : {
            events: {
                drilldown: function (e) {

                    if (!e.seriesOptions) {
                        var chart = this,
                            mapKey = 'countries/us/' + e.point.drilldown + '-all',
                            // Handle error, the timeout is cleared on success
                            fail = setTimeout(function () {
                                if (!Highcharts.maps[mapKey]) {
                                    chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);

                                    fail = setTimeout(function () {
                                        chart.hideLoading();
                                    }, 1000);
                                }
                            }, 3000);

                        // Show the spinner
                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

                        // Load the drilldown map
                        $.getScript('https://code.highcharts.com/mapdata/' + mapKey + '.js', function () {

                            data = Highcharts.geojson(Highcharts.maps[mapKey]);

                            // Set a non-random bogus value
                            $.each(data, function (i) {
                                this.value = i;
                            });

                            // Hide loading and add series
                            chart.hideLoading();
                            clearTimeout(fail);
                            chart.addSeriesAsDrilldown(e.point, {
                                name: e.point.name,
                                data: data,
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            });
                        });
                    }


                    this.setTitle(null, { text: e.point.name });
                },
                drillup: function () {
                    this.setTitle(null, { text: 'USA' });
                }
            }
        },

        title : {
            text : 'Highcharts Map Drilldown'
        },

        subtitle: {
            text: 'USA',
            floating: true,
            align: 'right',
            y: 50,
            style: {
                fontSize: '16px'
            }
        },

        legend: small ? {} : {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        colorAxis: {
            min: 0,
            minColor: '#E6E7E8',
            maxColor: '#005645'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },

        series : [{
            data : data,
            name: 'USA',
            dataLabels: {
                enabled: true,
                format: '{point.properties.postal-code}'
            }
        }],

        drilldown: {
            //series: drilldownSeries,
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textShadow: '0 0 3px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });

});

app.controller('FeedController', function($scope,utilityFun, $rootScope) {
    $rootScope.removeactive();
    //$(".cd-stretchy-nav a").removeClass("active");
    $("#feed").addClass ("active");
    //utilityFun.makeActive("feed");

});

app.controller('BadgesController', function($scope, $rootScope) {
    $rootScope.removeactive();
    $("#badges").addClass ("active");
    //utilityFun.makeActive("badges");


});

