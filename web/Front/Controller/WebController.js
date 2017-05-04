GamesWeb.controller('ctr1',function($scope,$http){
	$scope.addUser=function($usuario){
		$http.post('http://localhost:8000/adduser',$usuario).then(location.replace('http://localhost:8000/Front/articulos'));

	}


});