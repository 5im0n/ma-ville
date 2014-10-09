'use strict';

/** Presentation controller
 */
app.controller('PresentationCtrl', ['$scope', '$translate', '$ionicSlideBoxDelegate', function($scope, $translate, $ionicSlideBoxDelegate) {

  $translate([
    'appName',
    'presentation.becomeActor',
    'presentation.reportIncidents',
    'presentation.informationOrSuggestion',
    'presentation.collaborative',
    'presentation.followIncidents'
  ]).then(function(tr) {

    $scope.slides = [
      {
        title    : tr.appName,
        subtitle : tr['presentation.becomeActor'],
        img      : 'img/presentation/1.png'
      },
      {
        title    : tr['presentation.reportIncidents'],
        subtitle : tr['presentation.informationOrSuggestion'],
        img      : 'img/presentation/2.png'
      },
      {
        title    : tr['presentation.collaborative'],
        subtitle : tr['presentation.followIncidents'],
        img      : 'img/presentation/3.png'
      }
    ];

    $ionicSlideBoxDelegate.update();

  });


}]);
