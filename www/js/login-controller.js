'use strict';

angular.module('MyApp.controllers').controller('LoginCtrl', 
  function($scope, $state, $ionicLoading, Auth, User) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.errorMessage = null;

       
   
    if(!window.localStorage.didTutorial) {
     
      window.localStorage.didTutorial = true;
       $state.go('intro');
    } 

    $scope.login = function() {
      $scope.errorMessage = null;

      $ionicLoading.show({
        template: 'Please wait...'
      });
 //window.localStorage.user = $scope.user.email;
 
      if ($scope.user.email==="demo@gmail.com" && $scope.user.password === "asdf") {
        //alert("Demo login ");
        $state.go('app.dashboard');
      }
      Auth.login($scope.user.email, $scope.user.password)
          .then(User.loadCurrentUser)
          .then(redirectBasedOnStatus)
          .catch(handleError);
    };

    function redirectBasedOnStatus() {
      $ionicLoading.hide();
      
      if (User.hasChangedPassword()) {
        $state.go('app.dashboard');
      } else {
        $state.go('change-password');
      }
    }

    function handleError(error) {
      switch (error.code) {
        case 'INVALID_EMAIL':
        case 'INVALID_PASSWORD':
        case 'INVALID_USER':
          $scope.errorMessage = 'Email or password is incorrect';
          break;
        default:
          $scope.errorMessage = 'Error: [' + error.code + ']';
      }

      $ionicLoading.hide();
    }
  });
