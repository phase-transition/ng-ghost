`;(function(){`

head = document.getElementsByTagName("head")[0] # assuming it exists
toInsert = document.createDocumentFragment()
style=document.createElement "style"
style.innerHTML="#real-ball, #real-ball-descr {"+
"display: block;"+
"}"+
"#fake-ball, #fake-ball-descr {"+
"display: none;"+
"}"+
""+
".top-bar .order-btn{"+
	"display: block;"+
"}"+
".top-bar  .mini-logo-container{"+
	"left:50px;"+
	"margin-left: 0px;"+
"} "+
"@media only screen and (max-width: 450px) { "+
	".top-bar  .mini-logo-container .descr{"+
		"display:none; "+
	"}"+
"}";

toInsert.appendChild style
head.appendChild toInsert

`(function(i){'use strict';function d(c,b,e){return c[b]||(c[b]=e())}return d(d(i,"angular",Object),"module",function(){var c={};return function(b,e,f){e&&c.hasOwnProperty(b)&&(c[b]=null);return d(c,b,function(){function a(a,b,d){return function(){c[d||"push"]([a,b,arguments]);return g}}if(!e)throw Error("No module: "+b);var c=[],d=[],h=a("$injector","invoke"),g={_invokeQueue:c,_runBlocks:d,requires:e,name:b,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),
value:a("$provide","value"),constant:a("$provide","constant","unshift"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:h,run:function(a){d.push(a);return this}};f&&h(f);return g})}})})(window);`

$script [
	"bower_components/jquery/jquery.js",
	"bower_components/angular/angular.js",
	"bower_components/angular-route/angular-route.js",
	"bower_components/angular-resource/angular-resource.js",
	"bower_components/angular-cookies/angular-cookies.js",
	#"bower_components/angular-sanitize/angular-sanitize.js",
	"scripts/controllers/main.js",
	"scripts/app.js"
	#"scripts/uikit.min.js",
], ->
	#angular.bootstrap document, ['ngApp'];

`}());`