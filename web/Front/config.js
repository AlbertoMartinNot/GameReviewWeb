var GamesWeb=angular.module('GamesWeb', ['ngRoute']);

GamesWeb.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'Templates/info.template.html',
		controller: 'Controller/WebController.js'
	})

});