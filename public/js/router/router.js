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
					var page = Math.floor($routeParams.id / 20) + 1;
					return movieFactory.get({ page: page });
				}
      }
    })
    .otherwise({
      redirectTo: "/"
    });
});