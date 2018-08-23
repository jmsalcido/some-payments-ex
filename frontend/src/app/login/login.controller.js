(function() {
  "use strict";

  angular.module("frontend").controller("LoginController", LoginController);

  /** @ngInject */
  function LoginController(authenticator, $location) {
    var vm = this;

    vm.loading = false;
    vm.login = login;

    function login() {
      vm.loading = true;
      authenticator.login(vm.email, vm.password, function(success, data) {
        vm.loading = false;
        if (success) {
          $location.path('/payments');
        } else {
          vm.error = data.message;
        }
      });
    }
  }
})();
