'use strict';

angular.module('remont')
  .controller('HomeCtrl', function ($scope) {
    $scope.whyWeItems = [
      {
        "heading": 'Гарантии на все виды работ',
        "description": "Мы уверены, что гарантия Вам не понадобиться, однако, это неотъемлимая часть нашего договора. Качественная работа и проверенные временем материалы простой способ выполнения гарантийных обязательств."
      },
      {
        "heading": "Ответственность по договору",
        "description": "Мы согласовываем и заключаем в Вами договор, в котором честно прописываем нашу ответственность за работу, плюс к этому точные сметы и выверенные дополнительные соглашения на сложные работы."
      },
      {
        "heading": "Соблюдение сроков",
        "description": "Конкретные, согласованные сроки. Мы указываем в договоре все стадии проделанных работ. Так что Вы будете знать и контролировать, когда работы завершаться и какая стадия проходит в данный момент."
      },
      {
        "heading": "Оплата по факту",
        "description": "Оплату мы берем только по факту выполненных работ, прописанных в Договоре"
      },
      {
        "heading": "Квалифицированные специалисты и мастера",
        "description": "Только высококвалифицированные мастера и специалисты с более чем 15 летним опытом работы. На каждый вид работ свой масте и всегда качественный инструмент."
      },
      {
        "heading": "Высокое качество строительных материалов",
        "description": "Вам не нужно заботиться о том, что купить и в каких количествах, и как это все доставить. Все это сделает наша фирма за приемлимые цены."
      }
    ]

        console.log('contacts ctrl working properly');
    })
    .directive('fullPageView', ['$window', function ($window) {

        return {
            restrict: 'A',
            link: function (scope, el, attr) {
                var height = $window.innerHeight;
                console.log(height)
                if (height > 650) {

                }
                el.innerHeight(height);
                console.log($window.innerHeight)
            }
        }
    }])
    .directive('scrollTo', ['$window', function ($window) {

        return {
            restrict: 'A',
            link: function (scope, el, attr) {
                console.log()

                el.on('click', function () {
                    var diff = $window.innerWidth < 768 ? 0 : 50;
                    $("html, body").animate({ scrollTop: $(attr.scrollTo || '').offset().top - diff }, 800);
                });

            }
        }
    }])
    .directive('parallax', ['$window', function ($window) {

        return {
            restrict: 'A',
            link: function (scope, el, attr) {
                console.log(el[0])

                $($window).on('scroll', function () {
                    el.css("background-position-y", $($window).scrollTop() / 1.5);
                });

            }
        }
    }]);
