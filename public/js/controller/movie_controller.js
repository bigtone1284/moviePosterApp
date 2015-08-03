movieApp.controller("movieController", function ($scope, $routeParams, $location, $rootScope, movies) {
	$rootScope.movies = movies;
	$scope.getMovieById($routeParams.id);

	$scope.movieId = parseInt($routeParams.id, 10);
	$scope.pageNum = movies.page;

	$scope.background = function () {
		if ($scope.currMovie) {
			return "url(http://image.tmdb.org/t/p/w342" + $scope.currMovie.poster_path + ");";
		}
	};
});