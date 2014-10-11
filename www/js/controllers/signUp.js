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
