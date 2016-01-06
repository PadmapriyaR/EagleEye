'use strict';

angular.module('MyApp.controllers').controller('IntroCtrl', 
  function($scope, $state) {
  	if (window.localStorage.didTutorial) {
  		//$state.go('login');
  	}
    window.localStorage.didTutorial = true;
  });
