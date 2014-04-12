var quests_app = angular.module('quests_app', ['ngRoute']);

quests_app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'MainCtrl'
        })

        // route for the login page
        .when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'LoginCtrl'
        })

        // route for the structured-search page
        .when('/search', {
            templateUrl : 'pages/structured-search.html',
            controller  : 'StructuredSearchCtrl'
        })

        // route for the individual quest's page
        .when('/quests/:quest', {
            templateUrl : 'pages/quest_details.html',
            controller  : 'QuestPageCtrl'
        })

        // route for any other pages that aren't listed
        .otherwise({ redirectTo: '/' });
});