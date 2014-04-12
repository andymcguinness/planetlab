var quests_app = angular.module('quests_app', ['ngRoute']);

quests_app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'MainCtrl'
        })

        // route for the about page
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'LoginCtrl'
        })

        // route for the contact page
        .when('/search', {
            templateUrl : 'pages/structured-search.html',
            controller  : 'StructuredSearchCtrl'
        });
});