(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("SimplePaymentModalController", SimplePaymentModalController);

  /** @ngInject */
  function SimplePaymentModalController($uibModalInstance) {
    var vm = this;

    vm.okModal = function() {
      $uibModalInstance.close();
    };

    vm.cancelModal = function() {
        $uibModalInstance.dismiss();
    };
  }
})();
