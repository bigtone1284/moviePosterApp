movieApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "template/home.html",
      controller: "homeController"
    })
    .when("/movie/:id", {
      templateUrl: "template/movie.html",
      controller: "movieController"
    })
    .otherwise({
      redirectTo: "/"
    });
});