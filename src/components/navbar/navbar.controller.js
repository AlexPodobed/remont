'use strict';

angular.module('remont')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  })
  .directive('fixedMenu', ['$window', function($window){
    function checkPosition(el, attr){
      console.log($window.scrollY)
      if($window.scrollY >= +attr.fixedMenu){
        $(el).addClass('fixed');

      }else{
        $(el).removeClass('fixed');
      }
    }

    return {
      restrict: 'A',
      link: function(scope, el, attr){
        console.log(attr.fixedMenu)

        $($window).on('scroll', function(){
          checkPosition(el, attr);
        });
        checkPosition(el, attr);
      }
    }
  }]);
