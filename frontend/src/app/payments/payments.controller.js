(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("PaymentsController", PaymentsController);

  /** @ngInject */
  function PaymentsController(
    PaymentService,
    $location,
    $uibModal,
    $document,
    $log
  ) {
    var vm = this;

    vm.sortField = "id";
    vm.sortReverse = false;
    vm.orderBy = orderBy;
    vm.addPayment = addPayment;
    vm.editPayment = editPayment;
    vm.deletePayment = deletePayment;
    vm.importCsv = importCsv;

    initialize();

    function initialize() {
      getPayments();
    }

    function getPayments() {
      PaymentService.getPayments(function(data) {
        vm.payments = data;
      });
    }

    function orderBy(field) {
      if (vm.sortField == field) {
        vm.sortReverse = !vm.sortReverse;
      } else {
        vm.sortReverse = false;
      }

      vm.sortField = field;
    }

    function addPayment() {
      $location.path("/payments/add");
    }

    function editPayment(id) {
      $location.path("/payments/edit/" + id);
    }

    function deletePayment(id) {
      var parentElement = angular.element($document[0].querySelector("body"));

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: "app/payments/delete.modal.html",
        controller: "SimplePaymentModalController",
        controllerAs: "vm",
        appendTo: parentElement
      });

      modalInstance.result.then(function() {
        PaymentService.deletePayment(id, function(value, data) {
          if (value) {
            getPayments();
          } else {
            $log.info(data.message); // TODO should show a modal with the error?
          }
        });
      });
    }

    function importCsv() {
      var parentElement = angular.element($document[0].querySelector("body"));

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: "app/payments/import.modal.html",
        controller: "ImportPaymentModalController",
        controllerAs: "vm",
        appendTo: parentElement
      });

      modalInstance.result.then(function() {
        getPayments();
      });

    }
  }
})();
