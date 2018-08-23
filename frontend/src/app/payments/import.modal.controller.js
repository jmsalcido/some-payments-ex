(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("ImportPaymentModalController", ImportPaymentModalController);

  /** @ngInject */
  function ImportPaymentModalController($uibModalInstance, PaymentService) {
    var vm = this;
    vm.loading = false;

    vm.okModal = function() {
      vm.loading = true;
      PaymentService.importCsv(vm.uploadFile, function(value, data) {
        $uibModalInstance.close();
      });
    };

    vm.cancelModal = function() {
        $uibModalInstance.dismiss();
    };
  }
})();
