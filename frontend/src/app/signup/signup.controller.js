(function() {
  "use strict";

  angular.module("frontend").controller("SignUpController", SignUpController);

  /** @ngInject */
  function SignUpController(authenticator, $location) {
    var vm = this;

    vm.loading = false;
    vm.signup = signup;

    function signup() {
      if (vm.password !== vm.password_confirmation) {
        vm.error = 'Password does not match.';
        return;
      }
      
      vm.loading = true;
      authenticator.register(vm.username, vm.email, vm.password, vm.password_confirmation, function(success, data) {
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
