angular.module('jobsForYou', ['ngRoute', 'ngMaterial']);

angular.module('jobsForYou')
.config(['$routeProvider', function($routeProvider) {
	// $routeProvider is used to register the route with the html and controller
	$routeProvider.when('/dashboard', {
		templateUrl: 'html/dashboard.html',
		controller: 'dashboardController',
		title: 'dashboard',
		noLoginRequired: true,     
	}).otherwise({
		redirectTo: '/dashboard'
	});
}]);
