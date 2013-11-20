'use strict';
angular.module('ngApp')

.directive('ngGhostClock', [function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			var htmp=undefined;

			var checkTurn = function(h){
				$(element).find(".emblem").removeClass("fa-moon-o").removeClass("fa-sun-o");
				$(element).find(".emblem").addClass("fa-"+(h<18 && h>6 ? "sun" : "moon")+"-o");
			}
			//var h=0;
			var startTime = function (){
				var today=new Date();
				//h++;
				var h=today.getHours();
				var m=today.getMinutes();
				var s=today.getSeconds();
				// add a zero in front of numbers<10
				m=checkTime(m);
				s=checkTime(s);
				$(element).find(".clock-container").html(h+":"+m+":"+s);
				if(htmp!=h){
					checkTurn(h);
					htmp=h;
				}
				setTimeout(function(){
					startTime();
				},500);
			}

			var checkTime = function(i){
				if (i<10) i="0"+i;
				return i;
			}

			startTime();
		}
	};
}])