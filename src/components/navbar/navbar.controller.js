'use strict';

angular.module('remont')
  .controller('NavbarCtrl', function ($scope, $window) {
    $scope.date = new Date();

    $scope.fixedPoint = ($window.innerWidth <= 767) ? 10 : 80;
  })
  .directive('fixedMenu', ['$window', function($window){
    function checkPosition(el, attr){
      if($window.scrollY >= +attr.fixedMenu){
        $(el).addClass('fixed');
      }else{
        $(el).removeClass('fixed');
      }
    }

    return {
      restrict: 'A',
      link: function(scope, el, attr){

        $($window).on('scroll', function(){
          checkPosition(el, attr);
        });
        checkPosition(el, attr);
      }
    }
  }])
  .directive('checkResize', ['$window', function($window){
    function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    function checkAndSetModel(scope){
      scope.ngModel = ($window.innerWidth <= 767) ? 10 : 80;
      if(!scope.$$phase){ scope.$apply() }
    }

    return {
      scope: {
        ngModel: "="
      },
      link: function(scope, element, attr){
        var applyFn = debounce(function(){checkAndSetModel(scope)}, 300);
        $($window).on('resize', applyFn);
      }
    }
  }]);
