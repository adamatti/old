// https://stackoverflow.com/questions/29900018/uncaught-typeerror-xg-exec-is-not-a-function-fb-tokenize
Function.prototype.exec = Object.prototype.exec = function () {
  return null;
};

Object.prototype.toDate = function (defaultDay) {
  var months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  var month = months[this["month"]];
  var day = this["day"] || defaultDay || 1;

  return new Date(this["year"], month - 1, day);
};

Object.prototype.dateDiff = function () {
  var dateFrom = moment(this.from.toDate(1));
  var dateTo = this.to ? moment(this.to.toDate(28)) : moment();

  var diffYears = dateTo.diff(dateFrom, "years");
  var diffMonths = dateTo.diff(dateFrom, "months") % 12;

  return (
    (diffYears > 0 ? diffYears + " yr" : "") +
    (diffYears > 1 ? "s" : "") +
    (diffYears > 0 && diffMonths > 0 ? " / " : "") +
    (diffMonths > 0 ? diffMonths + " mo" : "") +
    (diffMonths > 1 ? "s" : "")
  );
};

//FIXME this file need to be improved. There are a lot of copy/paste
angular
  .module("app", ["ngResource", "ngRoute", "ngSanitize"])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/home", { templateUrl: "templates/home.html" })
        .when("/jobs", { templateUrl: "templates/jobs.html" })
        .when("/jobs-seq", { templateUrl: "templates/jobs-seq.html" })
        .when("/links", { templateUrl: "templates/links.html" })
        .when("/projects", { templateUrl: "templates/projects.html" })
        .when("/skills", { templateUrl: "templates/skills.html" })
        .when("/awards", { templateUrl: "templates/awards.html" })
        .when("/education", { templateUrl: "templates/education.html" })
        .when("/certifications", {
          templateUrl: "templates/certifications.html",
        })
        .when("/events", { templateUrl: "templates/events.html" })
        .otherwise({ redirectTo: "/home" });
    },
  ])
  .factory("jobs", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/jobs.json");
    },
  ])
  .factory("links", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/links.json");
    },
  ])
  .factory("projects", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/projects.json");
    },
  ])
  .factory("awards", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/awards.json");
    },
  ])
  .factory("certifications", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/certifications.json");
    },
  ])
  .factory("educations", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/educations.json");
    },
  ])
  .factory("skills", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/skills.json");
    },
  ])
  .factory("events", [
    "$resource",
    function ($resource) {
      return $resource("/old/json/events.json");
    },
  ])
  .controller(
    "mainCtrl",
    function (
      $scope,
      jobs,
      links,
      projects,
      awards,
      certifications,
      educations,
      skills,
      events
    ) {
      $scope.jobs = jobs.query();
      $scope.links = links.query();
      $scope.projects = projects.query();
      $scope.awards = awards.query();
      $scope.certifications = certifications.query();
      $scope.educations = educations.query();
      $scope.skills = skills.query();
      $scope.events = events.query();

      $scope.predicate = "date";
      $scope.reverse = true;
    }
  );
