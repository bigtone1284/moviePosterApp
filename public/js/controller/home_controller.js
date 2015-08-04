movieApp.controller("homeController", function ($scope, movieFactory, $routeParams, $rootScope) {
  $scope.pageClass = "page-home";
  $scope.headerSrc = "template/header.html";
  $routeParams.page = parseInt($routeParams.page, 10) || 1;
  $rootScope.movies = movieFactory.get({page: $routeParams.page});
  $scope.paginationSrc = "template/pagination.html";
  $scope.currMovie = null;

  $scope.ellipsesBefore = function () {
		return ($rootScope.movies.total_pages > 3 && $routeParams.page > 2);
  };

  $scope.ellipsesAfter = function () {
		return ($rootScope.movies.total_pages > 3 && $rootScope.movies.total_pages > $routeParams.page + 2);
  };

  $scope.previous = function () {
		if ($routeParams.page > 1) {
			return $routeParams.page - 1;
		}
  };

  $scope.next = function () {
		if ($routeParams.page < $rootScope.movies.total_pages) {
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
		if ($routeParams.page + 2 > $rootScope.movies.total_pages) {
			return $rootScope.movies.total_pages - 2 + pageNum;
		}
		return pageNum + $routeParams.page;
	};

	$scope.pageLabel = function () {
		return $routeParams.page;
	};

	$scope.currentPage = function (pageNum) {
		if ($routeParams.page === $rootScope.movies.total_pages) {
			if (pageNum === 2) return "current";
		}
		if ($routeParams.page === $rootScope.movies.total_pages - 1) {
			if (pageNum === 1) return "current";
		}
		if (pageNum === 0) return "current";
	};

	$scope.getMovieById = function (movieId) {
		var modMovieId = movieId % 20 === 0 ? 20 : movieId % 20;
		if (!$rootScope.movies.$resolved || Math.floor(modMovieId) + 1 !== $rootScope.movies.page) {
			$rootScope.movies = movieFactory.get({page: Math.floor((movieId - 1) / 20) + 1}, function () {
				$scope.currMovie = $rootScope.movies.results[modMovieId - 1];
			});
		} else {
			$scope.currMovie = $rootScope.movies.results[modMovieId - 1];
		}
	};

});
