'use strict';
angular.module('ngApp',[])

.controller('mainC',function ($scope,$http,$location,$rootScope){
	$('.hack-modal-background').css("display","block").animate({'opacity':'0.6'},300);
	
});