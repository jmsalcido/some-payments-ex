(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("PaymentsController", PaymentsController);

  /** @ngInject */
  function PaymentsController(PaymentService) {
    var vm = this;

    vm.sortField = 'concept';
    vm.sortReverse = false;
    vm.orderBy = orderBy;

    activate();

    function activate() {
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
