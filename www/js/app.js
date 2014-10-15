/*!
 * ma-ville
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */
'use strict';

/** Application definition
 */
var app = angular.module('ma-ville', ['ionic', 'pascalprecht.translate', 'ngCordova']);


/** Application configuration
 */
app.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {


  // App States
  $stateProvider
    .state('app', {
      url         : '/app',
      abstract    : true,
      templateUrl : 'partials/menus/side-menu.html',
      controller  : 'AppCtrl as app'
    })

    .state('presentation', {
      url         : '/presentation',
      templateUrl : 'partials/presentation-slide.html',
      controller  : 'PresentationCtrl as presentation'
    })

    .state('app.myReports', {
      url: '/my-reports',
      views: {
        viewContent: {
          templateUrl : 'partials/my-reports.html',
          controller  : 'MyReportsCtrl as myReports'
        }
      }
    })

    .state('app.newReport', {
      url: '/new-report',
      views: {
        viewContent: {
          templateUrl : 'partials/new-report.html',
          controller  : 'NewReportCtrl as newReport'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        viewContent: {
          templateUrl : 'partials/settings.html'
        }
      }
    })

    .state('app.townHall', {
      url: '/town-hall',
      views: {
        viewContent: {
          templateUrl : 'partials/town-hall.html'
        }
      }
    })

    .state('app.Elected', {
      url: '/elected',
      views: {
        viewContent: {
          templateUrl : 'partials/elected.html'
        }
      }
    })

    .state('app.maps', {
      url: '/maps',
      views: {
        viewContent: {
          templateUrl : 'partials/maps.html'
        }
      }
    });

  // For unmatch url
  $urlRouterProvider.otherwise('/presentation');


  // Internationalization
  $translateProvider
    .useStaticFilesLoader({ prefix: 'i18n/', suffix: '.json' })
    .preferredLanguage('fr_FR') // .determinePreferredLanguage()
    .fallbackLanguage(['en']);

}]);


/** kickstart the app
 */
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
});
