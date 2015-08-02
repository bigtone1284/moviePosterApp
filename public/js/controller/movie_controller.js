movieApp.controller("movieController", function ($scope, $routeParams, $location, $rootScope, movies) {
	$rootScope.movies = movies;
	$scope.getMovieById($routeParams.id);

	$scope.background = function (movie) {
		return "http://image.tmdb.org/t/p/w342" + movie.poster_path;
	};
});