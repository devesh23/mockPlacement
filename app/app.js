 
'use strict'

// Defining the mockPlacementApp 
var mockPlacementApp = angular.module('mockPlacementApp',['ui.router','ngMaterial','ngMessages']);

mockPlacementApp.config(function($stateProvider,$locationProvider){
	
	var startTestState = {
		name: 'startTest',
		url: '',
		templateUrl: 'views/startTest.html',
		controller: 'startTestController'
	}

	var loginPageState = {
		name: 'login',
		url: '/login',
		templateUrl: 'views/login.html',
		controller: 'loginController'
	}

	var studentLandingState = {
		name: 'studentLandingPage',
		url: '/landingPage',
		templateUrl: 'views/studentLandingPage.html',
		controller: 'studentLandingPageController'
	}

	var adminLandingState = {
		name: 'adminLandingPage',
		url: '/landingPage',
		templateUrl: 'views/adminLandingPage.html',
		controller: 'adminLandingPageController'
	}

	$stateProvider.state(startTestState);
	$stateProvider.state(loginPageState);
	$stateProvider.state(studentLandingState);
	$stateProvider.state(adminLandingState);
})