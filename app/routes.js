angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider

            .when('/', {
                templateUrl: 'pages/main.html'
            })
            .when('/news', {
                controller: 'newsController',
                templateUrl: 'pages/news.html'
            })
            .when('/login', {
                controller: 'userController',
                templateUrl: 'pages/login.html'
            })
            .when('/register', {
                controller: 'userController',
                templateUrl: 'pages/register.html'
            })
            .when('/addNews', {
                controller: 'newsController',
                templateUrl: 'pages/addNews.html'
            })

        .when('/football', {
                controller: 'newsController',
                templateUrl: 'pages/categories/football.html'
            })
            .when('/formula', {
                controller: 'newsController',
                templateUrl: 'pages/categories/formula.html'
            })
            .when('/mma', {
                controller: 'newsController',
                templateUrl: 'pages/categories/mma.html'
            })
            .when('/nba', {
                controller: 'newsController',
                templateUrl: 'pages/categories/nba.html'
            })
            .when('/tennis', {
                controller: 'newsController',
                templateUrl: 'pages/categories/tennis.html'
            })
            .when('/volleyball', {
                controller: 'newsController',
                templateUrl: 'pages/categories/volleyball.html'
            })
            .when('/winter-sports', {
                controller: 'newsController',
                templateUrl: 'pages/categories/winter-sports.html'
            })

        .otherwise({ redirectTo: '/' });

    });