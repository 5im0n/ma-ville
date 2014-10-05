'use strict';

/** Presentation controller
 */
app.controller('PresentationCtrl', ['$scope', '$translate', '$ionicSlideBoxDelegate', function($scope, $translate, $ionicSlideBoxDelegate) {

  $translate([
    'app_name',
    'presentation.become_actor',
    'presentation.report_incidents',
    'presentation.information_or_suggestion',
    'presentation.collaborative',
    'presentation.follow_incidents'
  ]).then(function(tr) {

    $scope.slides = [
      {
        title    : tr['app_name'],
        subtitle : tr['presentation.become_actor'],
        img      : 'img/presentation/1.png'
      },
      {
        title    : tr['presentation.report_incidents'],
        subtitle : tr['presentation.information_or_suggestion'],
        img      : 'img/presentation/2.png'
      },
      {
        title    : tr['presentation.collaborative'],
        subtitle : tr['presentation.follow_incidents'],
        img      : 'img/presentation/3.png'
      }
    ];

    $ionicSlideBoxDelegate.update();

  });


}]);
