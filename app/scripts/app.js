'use strict';

/*angular.element(document).ready(function() {
	console.log(angular.element(document));
});
*/

angular.module('ngApp')
.config(function ($routeProvider, $locationProvider) {
	var tmpTemplate = $("#view").html();
	$routeProvider
	.when('/', {
		template: tmpTemplate,
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});
