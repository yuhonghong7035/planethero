(function() {
  var metricsController = function($scope,Page, $rootScope, Page) {
      $scope.message = 'This is Show ShowMetrics screen';
      $rootScope.removeactive();
      $("#metrics").addClass ("active");
      //Page.makeActive("metrics");
      Page.setTitle('Metrics');
      Page.setHeader('Numbers and Figures');
      document.getElementById("header").style.backgroundColor = "rgb(52, 150, 132)";
      $rootScope.countup('metrics');

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
  };

  angular
    .module("planethero")
    .controller("metricsController", metricsController);
})();
