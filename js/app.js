//FIXME this file need to be improved. There are a lot of copy/paste
angular.module('app', ['ngResource','ngRoute','ngSanitize'])
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
		.when('/certifications', { templateUrl: 'templates/certifications.html' })
		.when('/events', { templateUrl: 'templates/events.html' })
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
.factory('certifications', ['$resource',function($resource){
	return $resource("/json/certifications.json");
}])
.factory('educations', ['$resource',function($resource){
	return $resource("/json/educations.json");
}])
.factory('skills', ['$resource',function($resource){
	return $resource("/json/skills.json");
}])
.factory('events', ['$resource',function($resource){
	return $resource("/json/events.json");
}])
.controller('mainCtrl', function($scope,jobs,links,projects,awards,certifications,educations,skills,events) {
	$scope.jobs = jobs.query();
	$scope.links = links.query();
	$scope.projects = projects.query();
	$scope.awards = awards.query();
	$scope.certifications = certifications.query();
	$scope.educations = educations.query();
	$scope.skills = skills.query();
	$scope.events = events.query();
})
;
