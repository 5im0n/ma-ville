'use strict';

/** Login controller
 */
app.controller('LoginCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.user = {};


  $scope.signIn = function() {
    $state.go('app.myReports');
  };


  $scope.signUp = function() {
    $state.go('app.myReports');
  };

}]);
