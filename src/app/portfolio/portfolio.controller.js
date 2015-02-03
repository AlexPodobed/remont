'use strict';

angular.module('remont')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.listOfWorks = [
      {
        'img': 'assets/images/1work.jpg',
        'descr': 'Гостинная'
      }, {
        'img': 'assets/images/2work.jpg',
        'descr': 'Кухня'
      }, {
        'img': 'assets/images/3work.jpg',
        'descr': 'Спальня'
      }, {
        'img': 'assets/images/4work.jpg',
        'descr': 'Дача'
      }, {
        'img': 'assets/images/5work.jpg',
        'descr': 'Детская'
      }, {
        'img': 'assets/images/6work.jpg',
        'descr': 'Залл'
      }
    ];

    console.log('main ctrl working properly');
  });
