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
      templateUrl: 'partials/side-menu.html',
      controller: 'AppCtrl'
    })

    .state('app.presentation', {
      url: '/presentation',
      views: {
        'viewContent': { templateUrl: 'partials/presentation-slide.html', controller: 'PresentationCtrl' }
      }
    })

    .state('app.signin', {
      url: '/signin',
      views: {
        'viewContent': { templateUrl: 'partials/signin.html', controller: 'LoginCtrl' }
      }
    })

    .state('app.signup', {
      url: '/signup',
      views: {
        'viewContent': { templateUrl: 'partials/signup.html', controller: 'LoginCtrl' }
      }
    })

    .state('app.myReports', {
      url: '/my-reports',
      views: {
        'viewContent': { templateUrl: 'partials/my_reports.html', controller: 'MyReportsCtrl' }
      }
    });

  // For unmatch url
  $urlRouterProvider.otherwise('/app/presentation');


  // Internationalization
  $translateProvider
    .useStaticFilesLoader({ prefix: 'i18n/', suffix: '.json' })
    .preferredLanguage('fr_FR') //.determinePreferredLanguage()
    .fallbackLanguage(['en']);

}]);


/** kickstart the app
 */
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
