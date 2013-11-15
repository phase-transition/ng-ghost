'use strict';

angular.module('ngApp')
	.config ($routeProvider,$locationProvider) ->
		tmpTemplate = $('view').html();
		$routeProvider
		.when '/', 
			template: tmpTemplate
			controller: "MainCtrl"
		.otherwise
			redirectTo: "/"

		$locationProvider.html5Mode true
#
