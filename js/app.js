angular.module('app', ['ngResource','ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/home', { templateUrl: 'templates/home.html'})
  	.when('/jobs', { templateUrl: 'templates/jobs.html' })
		.when('/jobs-seq', { templateUrl: 'templates/jobs-seq.html' })
  	.when('/links', { templateUrl: 'templates/links.html' })
		.when('/projects', { templateUrl: 'templates/projects.html' })
		.when('/skills', { templateUrl: 'templates/skills.html' })
		.when('/awards', { templateUrl: 'templates/awards.html' })
		.when('/education', { templateUrl: 'templates/education.html' })
  	.otherwise({redirectTo: '/home'});
}])
.factory('jobs', ['$resource',function($resource){
	return $resource("/json/jobs.json");
}])
.factory('links', ['$resource',function($resource){
	return $resource("/json/links.json");
}])
.factory('projects', ['$resource',function($resource){
	return $resource("/json/projects.json");
}])
.factory('awards', ['$resource',function($resource){
	return $resource("/json/awards.json");
}])
//'$scope','jobs','links','projects',
.controller('mainCtrl', function($scope,jobs,links,projects,awards) {
	$scope.jobs = jobs.query();
	$scope.links = links.query();
	$scope.projects = projects.query();
	$scope.awards = awards.query();
})
;
