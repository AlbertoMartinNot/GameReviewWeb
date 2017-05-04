var GamesWeb=angular.module('GamesWeb', ['ngRoute']);

GamesWeb.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'Templates/info.template.html',
		controller: 'ctr1'
	})
	.when('/articulos', {
		templateUrl: 'Templates/articulos.template.html',
		controller: 'ctr1'
	})

});