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
      })
      .state('workPreview', {
        url: '/our_works/:id',
        templateUrl: 'app/workPreview/workpreview.html',
        controller: 'WorkPreviewCtrl'
      });

    $urlRouterProvider.otherwise('/home');
  })
  .controller('GlobalCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.height = $window.innerHeight;
  }])
  .run(function ($rootScope, $window) {
    $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState) {
      if (fromState.name) {
        console.log(1)
//                $window.scrollTo(0,1)
        setTimeout(function () {
          $window.scrollTo(0, 1);
        }, 0)
      }
    })
  })
;
