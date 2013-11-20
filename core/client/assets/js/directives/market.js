'use strict';
angular.module('ngApp')

.controller('blabla', function($scope,$http){
	$http.get("/ghost/json/market.json").success(function(data){
		//for(var i in data) data[i].descr=nl2br(data[i].descr);
		$scope.comp=data;
	});
})

.directive('nl2br',function(){
	return {
		scope:{"nl2br":"=nl2br"},
		link: function (scope, element, attrs) {
			var v = scope.$watch('nl2br',function(){
				if(!scope.nl2br) return;
				element.html(nl2br(scope.nl2br))
				v();
			});

			var nl2br = function(string){
				return string.replace(/(\r\n|\n\r|\r|\n)/g, "<br>");
			};
		}
	}
})

.directive('market', function () {
	return {
		restrict: 'A',
		controller:'blabla',
		templateUrl: '/ghost/views/market.html',
		link: function (scope, element, attrs) {
			console.log(scope)
		}
	};
});