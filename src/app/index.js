'use strict';

angular.module('remont', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'app/contacts/contacts.html',
                controller: 'ContactsCtrl'
            })
            .state('portfolio', {
                url: '/our_works',
                templateUrl: 'app/portfolio/portfolio.html',
                controller: 'PortfolioCtrl'
            });


        $urlRouterProvider.otherwise('/home');
    })
;
