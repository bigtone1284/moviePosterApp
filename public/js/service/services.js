movieApp.factory('movieFactory', function ($resource) {
	// Contacts express api route.  
  return $resource('/movies_api');
});
