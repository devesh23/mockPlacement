var mockPlacementApp = angular.module('mockPlacementApp');

mockPlacementApp.controller('studentLandingPageController',['$scope', function($scope){

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