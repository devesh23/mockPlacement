var mockPlacementApp = angular.module('mockPlacementApp');

mockPlacementApp.controller('startTestController',['$scope','$state', function($scope,$state){
		$scope.openLoginPage = function(){
			$state.go('login');
		}
}]);