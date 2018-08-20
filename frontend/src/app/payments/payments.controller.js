(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("PaymentsController", PaymentsController);

  /** @ngInject */
  function PaymentsController() {
    var vm = this;

    vm.sortField = 'concept';
    vm.sortReverse = false;
    vm.orderBy = orderBy;

    activate();

    function activate() {
      var payments = [
        {
          concept: "Hola soy un pago",
          quantity: 100,
          date: new Date()
        },
        {
          concept: "Hola soy otro pago",
          quantity: 2,
          date: new Date()
        },
        {
          concept: "Abracadabra pago de cabra",
          quantity: 5,
          date: new Date()
        }
      ];

      vm.payments = payments;
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
