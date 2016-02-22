(function() {
  var metricsController = function($scope,Page, $rootScope, Page, $http) {
      $scope.message = 'This is Show ShowMetrics screen';
      $rootScope.removeactive();
      $("#metrics").addClass ("active");
      //Page.makeActive("metrics");
      Page.setTitle('Metrics');
      Page.setHeader('Numbers and Figures');
      document.getElementById("header").style.backgroundColor = "rgb(52, 150, 132)";
      $rootScope.countup('metrics');
      
      var countries = {'Afghanistan': 'AF',
 'Albania': 'AL',
 'Algeria': 'DZ',
 'American Samoa': 'AS',
 'Andorra': 'AD',
 'Angola': 'AO',
 'Anguilla': 'AI',
 'Antarctica': 'AQ',
 'Antigua and Barbuda': 'AG',
 'Argentina': 'AR',
 'Armenia': 'AM',
 'Aruba': 'AW',
 'Australia': 'AU',
 'Austria': 'AT',
 'Azerbaijan': 'AZ',
 'Bahamas': 'BS',
 'Bahrain': 'BH',
 'Bangladesh': 'BD',
 'Barbados': 'BB',
 'Belarus': 'BY',
 'Belgium': 'BE',
 'Belize': 'BZ',
 'Benin': 'BJ',
 'Bermuda': 'BM',
 'Bhutan': 'BT',
 'Bolivia, Plurinational State of': 'BO',
 'Bonaire, Sint Eustatius and Saba': 'BQ',
 'Bosnia and Herzegovina': 'BA',
 'Botswana': 'BW',
 'Bouvet Island': 'BV',
 'Brazil': 'BR',
 'British Indian Ocean Territory': 'IO',
 'Brunei Darussalam': 'BN',
 'Bulgaria': 'BG',
 'Burkina Faso': 'BF',
 'Burundi': 'BI',
 'Cambodia': 'KH',
 'Cameroon': 'CM',
 'Canada': 'CA',
 'Cape Verde': 'CV',
 'Cayman Islands': 'KY',
 'Central African Republic': 'CF',
 'Chad': 'TD',
 'Chile': 'CL',
 'China': 'CN',
 'Christmas Island': 'CX',
 'Cocos (Keeling) Islands': 'CC',
 'Colombia': 'CO',
 'Comoros': 'KM',
 'Congo': 'CG',
 'Congo, the Democratic Republic of the': 'CD',
 'Cook Islands': 'CK',
 'Costa Rica': 'CR',
 'Country name': 'Code',
 'Croatia': 'HR',
 'Cuba': 'CU',
 'Curaçao': 'CW',
 'Cyprus': 'CY',
 'Czech Republic': 'CZ',
 "Côte d'Ivoire": 'CI',
 'Denmark': 'DK',
 'Djibouti': 'DJ',
 'Dominica': 'DM',
 'Dominican Republic': 'DO',
 'Ecuador': 'EC',
 'Egypt': 'EG',
 'El Salvador': 'SV',
 'Equatorial Guinea': 'GQ',
 'Eritrea': 'ER',
 'Estonia': 'EE',
 'Ethiopia': 'ET',
 'Falkland Islands (Malvinas)': 'FK',
 'Faroe Islands': 'FO',
 'Fiji': 'FJ',
 'Finland': 'FI',
 'France': 'FR',
 'French Guiana': 'GF',
 'French Polynesia': 'PF',
 'French Southern Territories': 'TF',
 'Gabon': 'GA',
 'Gambia': 'GM',
 'Georgia': 'GE',
 'Germany': 'DE',
 'Ghana': 'GH',
 'Gibraltar': 'GI',
 'Greece': 'GR',
 'Greenland': 'GL',
 'Grenada': 'GD',
 'Guadeloupe': 'GP',
 'Guam': 'GU',
 'Guatemala': 'GT',
 'Guernsey': 'GG',
 'Guinea': 'GN',
 'Guinea-Bissau': 'GW',
 'Guyana': 'GY',
 'Haiti': 'HT',
 'Heard Island and McDonald Islands': 'HM',
 'Holy See (Vatican City State)': 'VA',
 'Honduras': 'HN',
 'Hong Kong': 'HK',
 'Hungary': 'HU',
 'ISO 3166-2:GB': '(.uk)',
 'Iceland': 'IS',
 'India': 'IN',
 'Indonesia': 'ID',
 'Iran, Islamic Republic of': 'IR',
 'Iraq': 'IQ',
 'Ireland': 'IE',
 'Isle of Man': 'IM',
 'Israel': 'IL',
 'Italy': 'IT',
 'Jamaica': 'JM',
 'Japan': 'JP',
 'Jersey': 'JE',
 'Jordan': 'JO',
 'Kazakhstan': 'KZ',
 'Kenya': 'KE',
 'Kiribati': 'KI',
 "Korea, Democratic People's Republic of": 'KP',
 'Korea, Republic of': 'KR',
 'Kuwait': 'KW',
 'Kyrgyzstan': 'KG',
 "Lao People's Democratic Republic": 'LA',
 'Latvia': 'LV',
 'Lebanon': 'LB',
 'Lesotho': 'LS',
 'Liberia': 'LR',
 'Libya': 'LY',
 'Liechtenstein': 'LI',
 'Lithuania': 'LT',
 'Luxembourg': 'LU',
 'Macao': 'MO',
 'Macedonia, the former Yugoslav Republic of': 'MK',
 'Madagascar': 'MG',
 'Malawi': 'MW',
 'Malaysia': 'MY',
 'Maldives': 'MV',
 'Mali': 'ML',
 'Malta': 'MT',
 'Marshall Islands': 'MH',
 'Martinique': 'MQ',
 'Mauritania': 'MR',
 'Mauritius': 'MU',
 'Mayotte': 'YT',
 'Mexico': 'MX',
 'Micronesia, Federated States of': 'FM',
 'Moldova, Republic of': 'MD',
 'Monaco': 'MC',
 'Mongolia': 'MN',
 'Montenegro': 'ME',
 'Montserrat': 'MS',
 'Morocco': 'MA',
 'Mozambique': 'MZ',
 'Myanmar': 'MM',
 'Namibia': 'NA',
 'Nauru': 'NR',
 'Nepal': 'NP',
 'Netherlands': 'NL',
 'New Caledonia': 'NC',
 'New Zealand': 'NZ',
 'Nicaragua': 'NI',
 'Niger': 'NE',
 'Nigeria': 'NG',
 'Niue': 'NU',
 'Norfolk Island': 'NF',
 'Northern Mariana Islands': 'MP',
 'Norway': 'NO',
 'Oman': 'OM',
 'Pakistan': 'PK',
 'Palau': 'PW',
 'Palestine, State of': 'PS',
 'Panama': 'PA',
 'Papua New Guinea': 'PG',
 'Paraguay': 'PY',
 'Peru': 'PE',
 'Philippines': 'PH',
 'Pitcairn': 'PN',
 'Poland': 'PL',
 'Portugal': 'PT',
 'Puerto Rico': 'PR',
 'Qatar': 'QA',
 'Romania': 'RO',
 'Russian Federation': 'RU',
 'Rwanda': 'RW',
 'Réunion': 'RE',
 'Saint Barthélemy': 'BL',
 'Saint Helena, Ascension and Tristan da Cunha': 'SH',
 'Saint Kitts and Nevis': 'KN',
 'Saint Lucia': 'LC',
 'Saint Martin (French part)': 'MF',
 'Saint Pierre and Miquelon': 'PM',
 'Saint Vincent and the Grenadines': 'VC',
 'Samoa': 'WS',
 'San Marino': 'SM',
 'Sao Tome and Principe': 'ST',
 'Saudi Arabia': 'SA',
 'Senegal': 'SN',
 'Serbia': 'RS',
 'Seychelles': 'SC',
 'Sierra Leone': 'SL',
 'Singapore': 'SG',
 'Sint Maarten (Dutch part)': 'SX',
 'Slovakia': 'SK',
 'Slovenia': 'SI',
 'Solomon Islands': 'SB',
 'Somalia': 'SO',
 'South Africa': 'ZA',
 'South Georgia and the South Sandwich Islands': 'GS',
 'South Sudan': 'SS',
 'Spain': 'ES',
 'Sri Lanka': 'LK',
 'Sudan': 'SD',
 'Suriname': 'SR',
 'Svalbard and Jan Mayen': 'SJ',
 'Swaziland': 'SZ',
 'Sweden': 'SE',
 'Switzerland': 'CH',
 'Syrian Arab Republic': 'SY',
 'Taiwan, Province of China': 'TW',
 'Tajikistan': 'TJ',
 'Tanzania, United Republic of': 'TZ',
 'Thailand': 'TH',
 'Timor-Leste': 'TL',
 'Togo': 'TG',
 'Tokelau': 'TK',
 'Tonga': 'TO',
 'Trinidad and Tobago': 'TT',
 'Tunisia': 'TN',
 'Turkey': 'TR',
 'Turkmenistan': 'TM',
 'Turks and Caicos Islands': 'TC',
 'Tuvalu': 'TV',
 'Uganda': 'UG',
 'Ukraine': 'UA',
 'United Arab Emirates': 'AE',
 'United Kingdom': 'GB',
 'United States': 'US',
 'United States Minor Outlying Islands': 'UM',
 'Uruguay': 'UY',
 'Uzbekistan': 'UZ',
 'Vanuatu': 'VU',
 'Venezuela, Bolivarian Republic of': 'VE',
 'Viet Nam': 'VN',
 'Virgin Islands, British': 'VG',
 'Virgin Islands, U.S.': 'VI',
 'Wallis and Futuna': 'WF',
 'Western Sahara': 'EH',
 'Yemen': 'YE',
 'Zambia': 'ZM',
 'Zimbabwe': 'ZW',
 'Åland Islands': 'AX'};
 
    //$('#graph_area').append (graph_content);
    $scope.getCountryCode = function(countryName) {
            if (countries.hasOwnProperty(countryName)) {
                //console.log (countries[countryName]);
                return countries[countryName];
            } else {
                console.log ('not found');
                return countryName;
            }
        }
        $scope.latitude =0;
        $scope.longitude=0;
        if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            console.log ($scope.latitude);
            $http({
                method: 'GET',
                url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+$scope.latitude+','+$scope.longitude+'&key=AIzaSyCfPZfzXIeGiPoLKcT2JA9ZHM8Dm3t0ZY8'
              }).then(function successCallback(response) {
                    console.log (response);
                    $scope.usercountry = response.data.results[response.data.results.length-2].formatted_address;
                    console.log ($scope.getCountryCode($scope.usercountry));
                    $scope.usercountrycode = $scope.getCountryCode($scope.usercountry);
                    $scope.popgraphs ('air');
              }, function errorCallback(response) {
                  console.log (response);
              });
        });
        }
        
    $scope.popgraphs = function(name) {
                    var graph_content = '<div class="graph">';
                    if (name=='air') graph_content += '<div style="width:500px; font-family:Helvetica, Arial, sans-serif; line-height:20px"><div style="background-color:#333; padding:0px 5px; font-weight:bold"><div style="color:#fff; font-size:12px; line-height:20px;"><a href="http://data.worldbank.org/indicator/EN.ATM.CO2E.PC/countries/1W-HK?display=graph" style="color:#fff;text-decoration:none;" class="active">CO2 emissions (metric tons per capita)</a></div></div><script type="text/javascript">widgetContext = { "url": "http://data.worldbank.org/widgets/indicator/0/web_widgets_3/EN.ATM.CO2E.PC/countries/1W-'+$scope.usercountrycode+'", "width": 500, "height": 235, "widgetid": "web_widget_iframe_6a17bd79df11edba0823cff01ba0942b" };</script><div id="web_widget_iframe_6a17bd79df11edba0823cff01ba0942b"></div><script src="http://data.worldbank.org/profiles/datafinder/modules/contrib/web_widgets/iframe/web_widgets_iframe.js"></script><div style="font-size: 10px; color:#000">Data from <a href="http://data.worldbank.org/indicator/EN.ATM.CO2E.PC/countries/1W-HK-CN?display=graph" style="color:#CCC;">World Bank</a></div></div>';
                    if (name=='pm') graph_content +='<div style="width:500px; font-family: Helvetica, Arial, sans-serif; line-height:20px"><div style="background-color:#333; padding:0px 5px; font-weight:bold"><div style="color:#fff; font-size:12px; line-height:20px;"><a href="http://data.worldbank.org/indicator/EN.ATM.PM25.MC.M3?display=graph" style="color:#fff;text-decoration:none;" class="active">PM2.5 air pollution, mean annual exposure (micrograms per cubic meter)</a></div></div><script type="text/javascript">widgetContext = { "url": "http://data.worldbank.org/widgets/indicator/0/web_widgets_3/EN.ATM.PM25.MC.M3/countries/1W-'+$scope.usercountrycode+'", "width": 500, "height": 235, "widgetid": "web_widget_iframe_f7e7eebec734f2290ecdca4e8b65dc27" };</script><div id="web_widget_iframe_f7e7eebec734f2290ecdca4e8b65dc27"></div><script src="http://data.worldbank.org/profiles/datafinder/modules/contrib/web_widgets/iframe/web_widgets_iframe.js"></script><div style="font-size: 10px; color:#000">Data from <a href="http://data.worldbank.org/indicator/EN.ATM.PM25.MC.M3?display=graph" style="color:#CCC;">World Bank</a></div></div>';
                    if (name== 'elec') graph_content+='<div style="width:500px; font-family:Helvetica, Arial, sans-serif; line-height:20px"><div style="background-color:#333; padding:0px 5px; font-weight:bold"><div style="color:#fff; font-size:12px; line-height:20px;"><a href="http://data.worldbank.org/indicator/EG.USE.ELEC.KH.PC?display=graph" style="color:#fff;text-decoration:none;" class="active">Electric power consumption (kWh per capita)</a></div></div><script type="text/javascript">widgetContext = { "url": "http://data.worldbank.org/widgets/indicator/0/web_widgets_3/EG.USE.ELEC.KH.PC/countries/1W-'+$scope.usercountrycode+'", "width": 500, "height": 235, "widgetid": "web_widget_iframe_5c0f68f5b887a926b6dd44e098dfdf81" };</script><div id="web_widget_iframe_5c0f68f5b887a926b6dd44e098dfdf81"></div><script src="http://data.worldbank.org/profiles/datafinder/modules/contrib/web_widgets/iframe/web_widgets_iframe.js"></script><div style="font-size: 10px; color:#000">Data from <a href="http://data.worldbank.org/indicator/EG.USE.ELEC.KH.PC?display=graph" style="color:#CCC;">World Bank</a></div></div>';
                    if (name=='energy') graph_content +='<div style="width:500px; font-family: Helvetica, Arial, sans-serif; line-height:20px"><div style="background-color:#333; padding:0px 5px; font-weight:bold"><div style="color:#fff; font-size:12px; line-height:20px;"><a href="http://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE/countries/1W?display=graph" style="color:#fff;text-decoration:none;" class="active">Energy use (kg of oil equivalent per capita)</a></div></div><script type="text/javascript">widgetContext = { "url": "http://data.worldbank.org/widgets/indicator/0/web_widgets_3/EG.USE.PCAP.KG.OE/countries/1W-'+$scope.usercountrycode+'", "width": 500, "height": 235, "widgetid": "web_widget_iframe_4cf739a3fff5bf890bb046f7716b3c44" };</script><div id="web_widget_iframe_4cf739a3fff5bf890bb046f7716b3c44"></div><script src="http://data.worldbank.org/profiles/datafinder/modules/contrib/web_widgets/iframe/web_widgets_iframe.js"></script><div style="font-size: 10px; color:#000">Data from <a href="http://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE/countries/1W?display=graph" style="color:#CCC;">World Bank</a></div></div>';
                    graph_content += '</div>';
                    $('#graph_area').html (graph_content);
    }

      $('#activities_container').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Most Activities'
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
              name: 'Countries',
              colorByPoint: true,
              data: [{
                  name: 'US',
                  y: 5,
                  drilldown: 'us'
              }, {
                  name: 'UK',
                  y: 4,
                  drilldown: 'uk'
              }, {
                  name: 'Austrialia',
                  y: 2,
                  drilldown: 'au'
              }]
          }],
          drilldown: {
              series: [{
                  id: 'us',
                  data: [
                      ['New York', 4],
                      ['Los Angeles', 2],
                      ['Chicago', 1]
                  ]
              }, {
                  id: 'uk',
                  data: [
                      ['Bath', 4],
                      ['Birmingham', 2]
                  ]
              }, {
                  id: 'au',
                  data: [
                      ['Sydney', 4],
                      ['Albury', 2],
                      ['Bathurst', 2]
                  ]
              }]
          }
      });
      
      $('#users_container').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: 'Most Heroes'
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
              name: 'Countries',
              colorByPoint: true,
              data: [{
                  name: 'US',
                  y: 50,
                  drilldown: 'us'
              }, {
                  name: 'UK',
                  y: 44,
                  drilldown: 'uk'
              }, {
                  name: 'Austrialia',
                  y: 22,
                  drilldown: 'au'
              }]
          }],
          drilldown: {
              series: [{
                  id: 'us',
                  data: [
                      ['New York', 14],
                      ['Los Angeles', 12],
                      ['Chicago', 11]
                  ]
              }, {
                  id: 'uk',
                  data: [
                      ['Bath', 14],
                      ['Birmingham', 12]
                  ]
              }, {
                  id: 'au',
                  data: [
                      ['Sydney', 14],
                      ['Albury', 12],
                      ['Bathurst', 8]
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
  };

  angular
    .module("planethero")
    .controller("metricsController", metricsController);
})();
