movieApp.controller("movieController", function ($scope, $routeParams, $location, $rootScope, movies) {
	$rootScope.movies = movies;
	$scope.getMovieById($routeParams.id);

	$scope.background = function () {
		if ($scope.currMovie) {
			return "url(http://image.tmdb.org/t/p/w342" + $scope.currMovie.poster_path + ");";
		}
	};
});