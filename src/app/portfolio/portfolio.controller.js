'use strict';

angular.module('remont')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.listOfWorks = [
      {
        'img': 'assets/images/1work.jpg',
        'descr': 'Гостинная',
        'id': '1'
      }, {
        'img': 'assets/images/2work.jpg',
        'descr': 'Кухня',
        'id': '2'
      }, {
        'img': 'assets/images/3work.jpg',
        'descr': 'Спальня',
        'id': '3'
      }, {
        'img': 'assets/images/4work.jpg',
        'descr': 'Дача',
        'id': '4'
      }, {
        'img': 'assets/images/5work.jpg',
        'descr': 'Детская',
        'id': '5'
      }, {
        'img': 'assets/images/6work.jpg',
        'descr': 'Залл',
        'id': '6'
      }
    ];

    console.log('main ctrl working properly');
  });
