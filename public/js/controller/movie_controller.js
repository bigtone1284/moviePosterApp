movieApp.controller("movieController", function ($scope, $routeParams, $location, $rootScope, $filter, movies) {
	$scope.pageClass = "page-movie";
	$rootScope.movies = movies;
	$scope.getMovieById($routeParams.id);

	$scope.movieId = parseInt($routeParams.id, 10);
	$scope.pageNum = movies.page;

	$scope.background = function () {
		if ($scope.currMovie) {
			return "url(http://image.tmdb.org/t/p/w342" + $scope.currMovie.poster_path + ");";
		}
	};

	$scope.lastMovie = function (movieId) {
		return movieId % 20 === 0;
	};

	$scope.movieTitle = function () {
		var releaseDate = new Date($scope.currMovie.release_date);
		return $scope.currMovie.title + " (" + $filter('date')(releaseDate, "yyyy") + ")";
	};

	$scope.details = function () {
		var score = "Score: " + $scope.currMovie.vote_average;
		var releaseDate = new Date($scope.currMovie.release_date);
		var release = "Release Date: " + $filter('date')(releaseDate, "longDate");
		return [score, release].join(' | ');
	};

	$scope.vertDetails = function () {
		var score = $scope.currMovie.vote_average;
		var releaseDate = new Date($scope.currMovie.release_date);
		var release = $filter('date')(releaseDate, "longDate");
		return {
			score: score,
			releaseDate: release
		};
	};

	$scope.overview = function () {
		return $scope.currMovie.overview;
	};

});