'use strict';

angular.module('remont')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  })
  .directive('fixedMenu', ['$window', function($window){
    function checkPosition(el){
      if($window.scrollY >= 80){
        $(el).addClass('fixed ');

      }else{
        $(el).removeClass('fixed');
      }
    }

    return {
      restrict: 'A',
      link: function(scope, el, attr){
        $($window).on('scroll', function(){
          checkPosition(el);
        });
        checkPosition(el);
      }
    }
  }]);
