movieApp.controller("homeController", function ($scope, movieFactory, $routeParams) {
  $scope.headerSrc = "templates/header.html";
  $routeParams.page = $routeParams.page || 1;
  $scope.movies = movieFactory.get({page: $routeParams.page});
  $scope.paginatorSrc = "templates/paginator.html";

  $scope.ellipsesBefore = function () {
		return ($scope.movies.total_pages > 3 && $routeParams.page > 2);
  };

  $scope.ellipsesAfter = function () {
		return ($scope.movies.total_pages > 3 && $scope.movies.total_pages > $routeParams.page + 2);
  };

  $scope.posterLink = function (movie) {
		if (movie.poster_path) {
			return "http://image.tmdb.org/t/p/w342" + movie.poster_path;
		} else if (movie.backdrop_path) {
			return "http://image.tmdb.org/t/p/w342" + movie.backdrop_path;
		} else {
			return "http://cdn.shoptools.com/images/products/starrett/imagenotavailable.jpg";
		}
	};

});
