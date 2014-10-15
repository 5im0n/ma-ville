/*!
 * ma-ville
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */
'use strict';

/** Presentation controller
 */
app.controller('PresentationCtrl', ['$scope', '$translate', '$ionicSlideBoxDelegate', '$ionicModal', '$timeout', function($scope, $translate, $ionicSlideBoxDelegate, $ionicModal, $timeout) {

  var self = this;

  $translate([
    'appName',
    'presentation.becomeActor',
    'presentation.reportIncidents',
    'presentation.informationOrSuggestion',
    'presentation.collaborative',
    'presentation.followIncidents'
  ]).then(function(tr) {

    self.slides = [
      {
        title    : tr.appName,
        subtitle : tr['presentation.becomeActor'],
        img      : 'img/logos/blue.png'
      },
      {
        title    : tr['presentation.reportIncidents'],
        subtitle : tr['presentation.informationOrSuggestion'],
        img      : 'img/logos/yellow.png'
      },
      {
        title    : tr['presentation.collaborative'],
        subtitle : tr['presentation.followIncidents'],
        img      : 'img/logos/green.png'
      }
    ];

    $ionicSlideBoxDelegate.update();

  });


  /** Init the Sign In and Sign Up modals
   */
  function initModals() {
    // Sign in modal
    $ionicModal.fromTemplateUrl('partials/modals/sign-in.html', {
      scope           : $scope,
      animation       : 'slide-in-up',
      focusFirstInput : true
    })
    .then(function(modal) {
      self.modalSignIn = modal;
    });

    // Sign up modal
    $ionicModal.fromTemplateUrl('partials/modals/sign-up.html', {
      scope           : $scope,
      animation       : 'slide-in-up',
      focusFirstInput : true
    })
    .then(function(modal) {
      self.modalSignUp = modal;
    });
  }


  // Inits the modals //
  initModals();


  this.signInModal = function() {
    this.modalSignIn.show();
  };


  this.signUpModal = function() {
    this.modalSignUp.show();
  };


  // Cleanup the modal when we're done
  $scope.$on('$destroy', function() {
    // Apply timeout for animation purpose
    $timeout(function() {
      self.modalSignIn.remove();
    }, 400);
  });

}]);
