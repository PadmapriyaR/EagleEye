'use strict';

angular.module('MyApp.controllers').controller('SideMenuCtrl', 
  function($scope, $state, Auth) {
    $scope.logout = function() {
      Auth.logout();
      $state.go('login');
    };
      $scope.doTutorial = function() {
        window.localStorage.didTutorial = false;
        //alert('hello showing intro again')
        $state.go('intro');
        }
  
    
  });
