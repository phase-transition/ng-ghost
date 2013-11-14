'use strict';
angular.module('ngApp', ['ngRoute']);
angular.module('ngApp')
	.controller('MainCtrl', function ($scope) {
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
	console.log($scope.awesomeThings)
});
