'use strict';

/** Sign-in controller
 */
app.controller('SignInCtrl', ['$state', '$scope', function($state, $scope) {

  var self = this;

  // User
  this.user = {};
  var defaultUser = { email: '', password: '' };
  angular.copy(defaultUser, this.user);

  // TODO delete
  this.user.email = 'simon@gmail.com';
  this.user.password = 'simon';


  /** Sign in
   */
  this.signIn = function() {
    if (angular.equals(self.user.email, 'simon@gmail.com') && angular.equals(self.user.password, 'simon')) {
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
      angular.copy(defaultUser, self.user);
    });
  }


  /** Reset the form and navigate to the home page
   */
  function resetFormAndNavigateToHomePage() {
    self.signInForm.$setPristine();
    $state.go('app.myReports');
    angular.copy(defaultUser, self.user);
  }


}]);
