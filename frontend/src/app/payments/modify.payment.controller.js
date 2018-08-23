(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("ModifyPaymentController", ModifyPaymentController);

  /** @ngInject */
  function ModifyPaymentController(PaymentService, $location, $routeParams) {
    var vm = this;

    vm.paymentId = null;
    vm.date = new Date();
    vm.opened = false;

    vm.format = "yyyy-MM-dd";
    vm.dateOptions = {
      formatYear: "yy",
      startingDay: 1
    };

    vm.open = open;

    vm.addPayment = addPayment;
    vm.editPayment = editPayment;

    initialize();

    function initialize() {
      vm.paymentId = $routeParams["id"];

      if (vm.paymentId) {
        // TODO parse paymentId to be number
        setPayment(vm.paymentId);
      }
    }

    function setPayment(id) {
      PaymentService.getPayment(id, function(value, data) {
        if (value) {
          vm.concept = data.concept;
          vm.quantity = data.quantity;
          vm.date = new Date(data.date);
        }
      });
    }

    function open($event) {
      $event.preventDefault();
      $event.stopPropagation();

      vm.opened = true;
    }

    function addPayment() {
      if (!verify()) {
        return;
      }

      vm.loading = true;

      PaymentService.addPayment(
        {
          concept: vm.concept,
          date: vm.date,
          quantity: vm.quantity
        },
        function(value, data) {
          vm.loading = false;
          if (value) {
            $location.path("/payments");
          } else {
            vm.error = data.message;
          }
        }
      );
    }

    function verify() {
      if (!vm.date || !vm.quantity || !vm.concept) {
        vm.error = "Please fill all the fields";
        return false;
      }

      return true;
    }

    function editPayment() {
      if (!verify()) {
        return;
      }

      vm.loading = true;

      PaymentService.editPayment(
        vm.paymentId,
        {
          concept: vm.concept,
          date: vm.date,
          quantity: vm.quantity
        },
        function(value, data) {
          vm.loading = false;
          if (value) {
            $location.path("/payments");
          } else {
            vm.error = data.message;
          }
        }
      );
    }
  }
})();
