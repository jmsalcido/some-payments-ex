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
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignUpController',
        controllerAs: 'vm'
      })
      .when('/logout', {
        templateUrl: 'app/logout/logout.html',
        controller: 'LogoutController',
        controllerAs: 'vm'
      })
      .when('/payments', {
        templateUrl: 'app/payments/payments.html',
        controller: 'PaymentsController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
