(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("PaymentsController", PaymentsController);

  /** @ngInject */
  function PaymentsController(PaymentService, authenticator, $location) {
    var vm = this;

    vm.sortField = 'concept';
    vm.sortReverse = false;
    vm.orderBy = orderBy;

    initialize();

    function initialize() {
      if (!authenticator.hasToken()) {
        $location.path('/login');
        return;
      }

      PaymentService.getPayments(function(data) {
        vm.payments = data;
      });
    }

    function orderBy(field) {

      if (vm.sortField == field) {
        vm.sortReverse = !vm.sortReverse
      } else {
        vm.sortReverse = false;
      }

      vm.sortField = field;
    }

  }
})();
