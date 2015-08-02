movieApp.controller("movieController", function ($scope, $routeParams, $location) {
	$scope.getMovieById($routeParams.id);
});