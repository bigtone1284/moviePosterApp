movieApp.factory('movieFactory', function ($resource) {
  return $resource('/movies_api');
});
