movieApp.factory('movieFactory', function ($resource) {
	debugger
  return $resource('/movies_api');
});
