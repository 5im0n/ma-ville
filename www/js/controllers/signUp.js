/*!
 * ma-ville
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */
'use strict';

/** Sign-up controller
 */
app.controller('SignUpCtrl', ['$state', '$scope', function($state, $scope) {

  var self = this;

  // User
  var defaultUser = { name: '', email: '', password: '' };
  angular.copy(defaultUser, this.user);



  /** Sign up
   */
  this.signUp = function() {
    console.log('Not implements');
  };


  /** Close modal
   */
  this.closeModal = function() {
    closeModalAndResetForm();
  };


  /** Reset the form and close the modal
   */
  function closeModalAndResetForm() {
    $scope.presentation.modalSignUp.hide().then(function() {
      self.signUpForm.$setPristine();
      angular.copy(defaultUser, self.user);
    });
  }


}]);
