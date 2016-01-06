'use strict';

angular.module('MyApp.controllers').controller('DashboardCtrl', 
  function($scope, $state, $firebase, $http) {

      /*alert(window.localStorage.user);

  			$scope.addRent = function(e) {
           $scope.storeRent = function() {
           	var ref = new Firebase("https://travelapptest.firebaseio.com/rent");
       		 $scope.rent = $firebase(ref);
			     data = {source: $scope.source1, destination: $scope.destination,
                   journey: $scope.journey, return1: $scope.return1, type1: $scope.type1,
                  time1: $scope.time1, price: $scope.price};
            addUserRent(data);

                  $scope.rent.$add({source: $scope.source1, destination: $scope.destination,
                   journey: $scope.journey, return1: $scope.return1, type1: $scope.type1,
                  time1: $scope.time1, price: $scope.price});
                  
                }
        }



        $scope.addBook = function(e) {
           $scope.sendBook = function() {
           	var ref = new Firebase("https://travelapptest.firebaseio.com/book");
       		 $scope.book = $firebase(ref);
			    

                 $scope.book.$add({source: $scope.source1, destination: $scope.destination,
                   journey: $scope.journey, return1: $scope.return1, type1: $scope.type1,
                  seats: $scope.seats, full: $scope.full, half: $scope.half, price: $scope.price});
                  
                }
        }
 
           $scope.addProfile = function(e) {
           $scope.sendProfile = function() {
           	var ref = new Firebase("https://travelapptest.firebaseio.com/profile");
       		 $scope.profile1 = $firebase(ref);
       		 console.log('Your Profile was updated Successfully!!!');

			    $scope.profile1.$add({name: $scope.name1, mobile: $scope.mobile,
                   mail: $scope.mail, address: $scope.address});
			    
                 
                }
        }
        $scope.clear = function(){
          $scope.name = "";
        }*/

        $scope.callus = function() {
          alert("Do you want to call us");
          window.plugins.CallNumber.callNumber(onSuccess, onError, number);
          function onSuccess() {
            alert("calling");
          }
          function onError() {
            alert("cant call now");
          }
        }

  });
