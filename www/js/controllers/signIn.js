'use strict';

/** Sign-in controller
 */
app.controller('SignInCtrl', ['$state', '$scope', function($state, $scope) {

  var self = this;

  // User
  var defaultUser = { name: '', email: '' };
  this.user = angular.copy(defaultUser);

  // TODO delete
  this.user.email = 'simon@gmail.com';
  this.user.password = 'simon';



  /** Sign in
   */
  this.signIn = function() {
    if (self.user.email === 'simon@gmail.com' && self.user.password === 'simon') {
      console.log('OK login');
      resetFormAndNavigateToHomePage();
    }
    else {
      console.error('Error login');
    }
  };


  /** Close modal
   */
  this.closeModal = function() {
    closeModalAndResetForm();
  };


  /** Reset the form and close the modal
   */
  function closeModalAndResetForm() {
    $scope.presentation.modalSignIn.hide().then(function() {
      self.signInForm.$setPristine();
      self.user = defaultUser;
    });
  }


  /** Reset the form and navigate to the home page
   */
  function resetFormAndNavigateToHomePage() {
    self.signInForm.$setPristine();
    $state.go('app.myReports');
    self.user = defaultUser;
  }


}]);
