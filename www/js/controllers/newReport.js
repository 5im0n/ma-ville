/*!
 * ma-ville
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */
'use strict';

/** New report controller
 */
app.controller('NewReportCtrl', ['$cordovaCamera', '$cordovaGeolocation', '$state', '$ionicViewService', '$scope', function($cordovaCamera, $state, $ionicViewService, $scope) {

  var self = this;

  this.report = {};


  /** Send report
   */
  this.newReport = function() {
    $state.go('app.myReports').then(function() {
      $scope.app.rootReports.push(self.report);
      $ionicViewService.clearHistory();
    });
  };


  /** Take picture
   */
  this.takePicture = function() {

    var options = {
      quality : 75,
      allowEdit : false,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
      self.report.img = imageURI;
      self.lastPhoto = imageURI;
    }, function(err) {
      // An error occured
      console.log(err);
    });
  };

}]);
