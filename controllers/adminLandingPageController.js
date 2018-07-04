var mockPlacementApp = angular.module('mockPlacementApp');

mockPlacementApp.controller('adminLandingPageController',['$scope','$state', function($scope,$state){


		$scope.data = {
	      selectedIndex: 0
	    };
	    $scope.next = function() {
	      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
	    };
	    $scope.previous = function() {
	      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
	    };


		$scope.openLandingPage = function(){
			

			// TODO: Service call to get whether user student or admin

			if(true){
				$state.go('adminLandingPage');	
			}
			else{
				$state.go('studentLandingPage');
			}

		}
}]);