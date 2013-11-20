'use strict';
angular.module('ngApp',[])

//.service('jQuery-v1_10_2',)
// Write a rapper for jquery

.controller('mainC',function ($scope,$http,$location,$rootScope){
	var toggleFooter=false;
	//var $ = jQuery_v1_10_2;

	$scope.openFooter = function(){
		/*if(!toggleFooter){
			$(".footer-options").css("height",'167px');
			$(".footer-options .options-btn-icon").removeClass("fa-bars").addClass("fa-angle-double-down").addClass("up");
		} else {
			$(".footer-options").css("height",'60px');
			$(".footer-options .options-btn-icon").removeClass("fa-angle-double-down").removeClass("up").addClass("fa-bars");
		}
		toggleFooter=!toggleFooter;*/
	}
	
});