'use strict';
angular.module('ngApp',[])

.controller('mainC',function ($scope,$http,$location,$rootScope){

	$scope.openMarket = function(mode){
		if(mode==null){
			$('.hack-modal-init').css("display","block");
			$('.hack-modal-init .hack-modal-background').animate({"opacity":0.6},500);
			$('.hack-modal-init .container-modal').animate({"opacity":1},500);
		} else {
			$('.hack-modal-init').css({"display":"none"});
			$('.hack-modal-init .hack-modal-background').add('.hack-modal-init .container-modal').css("opacity",0);
		}
	}	
	
	$scope.openMarket();
});