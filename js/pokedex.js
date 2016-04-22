var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"
var monPoke={};


pokeApp.factory("Pokemon",function($resource){
	return $resource("http://pokeapi.co/api/v2/pokemon-species/:id/",{id:'@id'});
	});

pokeApp.controller('MainCtrl', function ($scope,$log,Pokemon, $http,$resource){
	//Bouchon
	/*$scope.pokemonlists = [
		{'id':1, 'url':'1', 'name':'Charizard'},
    	{'id':2,'url':'2', 'name':'Bulbasaur'} 
	];*/
	$scope.log= $log;

	$http({
		method: 'GET',
		url: 'http://pokeapi.co/api/v2/pokedex/1'
	}).then(function successCallback(response) {
		$scope.pokemonlists = response.data.pokemon_entries;

		console.log(response.data.pokemon_entries);
	}, function errorCallback(response) {
		$scope.log = "error";
	});

	$scope.go = function(idP){
		/*
		var urlfixe = $resource('http://pokeapi.co/'+url)
		SelectPoke = urlfixe.get({},function(){
			SelectPoke.$save();
		});
		 */
		console.log("Hello");
		console.log(idP);
		$scope.AffichePoke = Pokemon.get();

	}
});
