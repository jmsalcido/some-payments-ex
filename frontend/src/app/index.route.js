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
        controllerAs: 'vm'
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
        controllerAs: 'vm',
        resolve: {
          authenticated: onlyAuthenticatedUsers
        }
      }).when('/payments/add', {
        templateUrl: 'app/payments/add.html',
        controller: 'ModifyPaymentController',
        controllerAs: 'vm',
        resolve: {
          authenticated: onlyAuthenticatedUsers
        }
      }).when('/payments/edit/:id', {
        templateUrl: 'app/payments/edit.html',
        controller: 'ModifyPaymentController',
        controllerAs: 'vm',
        resolve: {
          authenticated: onlyAuthenticatedUsers
        }
      })
      .otherwise({
        redirectTo: '/'
      });

      function onlyAuthenticatedUsers($location, $q, authenticator) {
        var defer = $q.defer();
        if (!authenticator.hasToken()){
          // User isn’t authenticated
          defer.reject();
          $location.path('/login');
        } else {
          defer.resolve();
        }

        return defer.promise;
      }

  }
})();
