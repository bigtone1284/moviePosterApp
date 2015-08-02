movieApp.controller("homeController", function ($scope, movieFactory, $routeParams) {
  $scope.headerSrc = "template/header.html";
  $routeParams.page = parseInt($routeParams.page, 10) || 1;
  $scope.movies = movieFactory.get({page: $routeParams.page});
  $scope.paginationSrc = "template/pagination.html";
  $scope.currMovie = null;

  $scope.ellipsesBefore = function () {
		return ($scope.movies.total_pages > 3 && $routeParams.page > 2);
  };

  $scope.ellipsesAfter = function () {
		return ($scope.movies.total_pages > 3 && $scope.movies.total_pages > $routeParams.page + 2);
  };

  $scope.previous = function () {
		if ($routeParams.page > 1) {
			return $routeParams.page - 1;
		}
  };

  $scope.next = function () {
		if ($routeParams.page < $scope.movies.total_pages) {
			return $routeParams.page + 1;
		}
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

	$scope.page = function (pageNum) {
		if ($routeParams.page + 2 > $scope.movies.total_pages) {
			return $scope.movies.total_pages - 2 + pageNum;
		}
		return pageNum + $routeParams.page;
	};

	$scope.pageLabel = function () {
		return $routeParams.page;
	};

	$scope.currentPage = function (pageNum) {
		if ($routeParams.page === $scope.movies.total_pages) {
			if (pageNum === 2) return "current";
		}
		if ($routeParams.page === $scope.movies.total_pages - 1) {
			if (pageNum === 1) return "current";
		}
		if (pageNum === 0) return "current";
	};

	$scope.getMovieById = function (movieId) {
		if (!$scope.movies.$resolved || Math.floor(movieId % 20) + 1 !== $scope.movies.page) {
			$scope.movies = movieFactory.get({page: Math.floor(movieId / 20) + 1}, function () {
				$scope.currMovie = $scope.movies.results[movieId % 20 - 1];
			});
		} else {
			$scope.currMovie = $scope.movies.results[movieId % 20 - 1];
		}
	};

});
