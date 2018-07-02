var mockPlacementApp = angular.module('mockPlacementApp');

mockPlacementApp.controller('loginController',['$scope', function($scope){
		$scope.openLoginPage = function(){
			$state.go('loginPageState');
		}
}]);