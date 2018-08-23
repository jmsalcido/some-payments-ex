(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("DeletePaymentModalController", DeletePaymentModalController);

  /** @ngInject */
  function DeletePaymentModalController($uibModalInstance) {
    var vm = this;

    vm.okModal = function() {
      $uibModalInstance.close();
    };

    vm.cancelModal = function() {
        $uibModalInstance.dismiss();
    };
  }
})();
