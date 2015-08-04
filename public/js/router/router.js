movieApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "template/home.html",
      controller: "homeController"
    })
    .when("/movies/:id", {
      templateUrl: "template/movie.html",
      controller: "movieController",
      resolve: {
				movies: function ($routeParams, movieFactory) {
					// before movies/:id is visited, resolve the movies collection.
					var page = Math.floor($routeParams.id / 20) + 1;
					return movieFactory.get({ page: page });
				}
      }
    })
    .otherwise({
      redirectTo: "/"
    });
});