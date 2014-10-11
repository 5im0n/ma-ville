'use strict';

/** Application definition
 */
var app = angular.module('ma-ville', ['ionic', 'pascalprecht.translate']);


/** Application configuration
 */
app.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {


  // App States
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'partials/menus/side-menu.html',
      controller: 'AppCtrl'
    })

    .state('presentation', {
      url         : '/presentation',
      templateUrl : 'partials/presentation-slide.html',
      controller  : 'PresentationCtrl as presentation'
    })

    .state('app.myReports', {
      url: '/my-reports',
      views: {
        viewContent: { templateUrl: 'partials/my-reports.html', controller: 'MyReportsCtrl' }
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
