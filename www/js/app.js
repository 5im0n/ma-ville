'use strict';

/** Application definition
 */
var app = angular.module('ma-ville', ['ionic', 'pascalprecht.translate']);


/** Application config
 */
app.config(['$translateProvider', function($translateProvider) {

  // Internationalization
  $translateProvider
    .useStaticFilesLoader({ prefix: 'i18n/', suffix: '.json' })
    .determinePreferredLanguage()
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
