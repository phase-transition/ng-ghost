'use strict';
angular.module('ngApp')


.directive('postContent', function () {
	return {
		restrict: 'C',
		/*controller:function($scope){
			console.log($scope.lol);
			setTimeout(function(){
				console.log($scope.lol);
			})
		},*/
		//templateUrl: '/ghost/views/market.html',
		link: function (scope, element, attrs) {
			
			var tagsHtml = function(msg,attr){
				msg=strReplace(
				[
				'[#img-round]',
				'[/img-round]',				
				'[#img-round-small]',				
				'[#img-round-big]',			
				'[#img-round-circle]',			
				],[
					'<span class="img-round">',
					'</span>',
					'<span class="img-round img-round-small">',
					'<span class="img-round img-round-big">',
					'<span class="img-round img-round-circle">'
				],
				msg);
				return msg;
			}

			var strReplace = function(search, replace, subject, count) {
			  var i = 0,    j = 0,    temp = '',    repl = '',    sl = 0,    fl = 0,    f = [].concat(search),    r = [].concat(replace),    s = subject,
			    ra = Object.prototype.toString.call(r) === '[object Array]',
			    sa = Object.prototype.toString.call(s) === '[object Array]';
			  s = [].concat(s);
			  if (count)this.window[count] = 0;

			  for (i = 0, sl = s.length; i < sl; i++) {
			    if (s[i] === '')continue;
			    for (j = 0, fl = f.length; j < fl; j++) {
			      temp = s[i] + '';
			      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
			      s[i] = (temp).split(f[j]).join(repl);
			      if (count && s[i] !== temp) this.window[count] += (temp.length - s[i].length) / f[j].length;
			    }
			  }
			  return sa ? s : s[0];
			}


			
			$(element).html(
			 	tagsHtml($(element).html())
			);

		}
	};
});