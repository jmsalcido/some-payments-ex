(function() {
  'use strict';

  angular
    .module('frontend')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/payments', {
        templateUrl: 'app/payments/payments.html',
        controller: 'PaymentsController',
        controllerAs: 'payments'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
