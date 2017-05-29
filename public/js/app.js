angular.module('jobsForYou', ['ngRoute', 'ngMaterial', 'toaster']);

angular.module('jobsForYou')
.config(['$routeProvider', function($routeProvider) {
	console.log("module initializd")
	// $routeProvider is used to register the route with the html and controller
	$routeProvider.when('/dashboard', {
		templateUrl: 'html/dashboard.html',
		controller: 'dashboardController',
		title: 'dashboard',
		     
	}).otherwise({
		redirectTo: '/dashboard'
	});
}]);
