angular.module('jobsForYou').controller('dashboardController', ['$scope', '$http', '$rootScope','$location', '$window','$document','$timeout','toaster',function($scope, $http, $rootScope, $location, $window, $document, $timeout, toaster) {
	
	
	console.log("inside controller");
	$scope.jobs=[{"name":"Accenture",
	              "title":"Developer",
				  "description":"Qualification-BTECH"},
				  { "name":"Mphasis",
	                "title":"Developer",
				    "description":"Qualification-BTECH"}
				  
	             ];
				 
				 
	var promiseObj = $http.post('/api/v1/jobsForYou');
		promiseObj.then(function(res) {
				if(res.data.status == 0){
					$scope.edocs = res.data.results;
				}
				else if(res.data.status ==1 || res.data.status ==2){
					toaster.pop({type: 'error', title: "Error", body:res.data.statusText});	
				}
			},
			function(res) {  
				toaster.pop({type: 'error', title: "Error", body:"Internal Server Error"});	
			}
		);
	
}]);